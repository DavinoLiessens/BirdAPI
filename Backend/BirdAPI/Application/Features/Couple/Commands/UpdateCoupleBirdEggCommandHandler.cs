using BirdAPI.Application.Common;
using Wwsv.Domain.SeedWork;
using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class UpdateCoupleBirdEggCommandHandler : IRequestHandler<UpdateCoupleBirdEggCommand, BaseResponse<BirdEggInputModel>>
    {
        private readonly BirdAPIContext _context;

        public UpdateCoupleBirdEggCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<BirdEggInputModel>> Handle(UpdateCoupleBirdEggCommand request, CancellationToken cancellationToken)
        {
            var model = request.Model;

            var existingEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.Id == model.Id && be.CoupleId == model.CoupleId, cancellationToken);
            if (existingEgg == null)
            {
                return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.NotFound)
                                .AddError($"No birdEgg found with id {model.Id} for couple {model.CoupleId}");
            }

            var ringNumber = string.IsNullOrWhiteSpace(model.RingNumber) ? null : model.RingNumber.Trim();

            // A ring number must be unique, but the bird that was already created from this egg
            // naturally has the same ring number and must not count as a conflict.
            if (ringNumber != null &&
                await _context.Birds.AnyAsync(b => b.NormalizedRingNumber == RingNumber.Normalize(ringNumber) && b.Id != existingEgg.BirdId, cancellationToken))
            {
                return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                .AddError($"Bird with ringnumber {ringNumber} already exist!");
            }

            existingEgg.UpdateCameOutOn(model.CameOutOn);
            existingEgg.UpdateFlyOutOn(model.FlyOutOn);
            existingEgg.UpdateGender(model.Gender);
            existingEgg.UpdateColor(model.Color);
            existingEgg.UpdateRingNumber(ringNumber);

            if (existingEgg.BirdId != null)
            {
                // Keep the bird that was created from this egg in sync with its ring number
                var existingBird = await _context.Birds.FirstOrDefaultAsync(b => b.Id == existingEgg.BirdId, cancellationToken);
                if (existingBird != null && ringNumber != null && existingBird.RingNumber != ringNumber)
                {
                    existingBird.UpdateBird(ringNumber, existingBird.CageNumber, existingBird.Description, existingBird.IsDead ?? false);
                }
            }
            else if (model.CameOutOn != null &&
                     model.FlyOutOn != null &&
                     ringNumber != null &&
                     model.Color != null &&
                     model.Gender != null)
            {
                // All data is known: the young bird becomes a bird of its own
                var couple = await _context.Couples
                                           .Include(c => c.Father)
                                           .FirstOrDefaultAsync(c => c.Id == existingEgg.CoupleId, cancellationToken);
                if (couple == null)
                {
                    return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.NotFound)
                                    .AddError($"No couple found with id {existingEgg.CoupleId}");
                }

                // A young bird from our own couple is bred and owned by the kwekerij itself
                var self = await _context.GetSelfAsync(cancellationToken);
                if (self == null)
                {
                    return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                    .AddError("This kwekerij has no own contact yet.");
                }

                var newBird = new Domain.AggregatesModel.BirdAggregate.Bird(
                    ringNumber,
                    model.Gender,
                    couple.Father.BirdType,
                    model.CameOutOn.Value,
                    model.Color,
                    couple.CageNumber);
                newBird.BelongsToOwner(self);
                newBird.BelongsToBreeder(self);

                await _context.Birds.AddAsync(newBird, cancellationToken);
                await _context.SaveChangesAsync();

                // The id is only known after saving
                existingEgg.BirdId = newBird.Id;
            }

            await _context.SaveChangesAsync();

            var result = existingEgg.ToInputModel();
            return new BaseResponse<BirdEggInputModel>(result);
        }
    }
}
