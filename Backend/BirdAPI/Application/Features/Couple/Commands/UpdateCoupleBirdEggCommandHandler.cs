using AutoMapper;
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
        private readonly IMapper _mapper;

        public UpdateCoupleBirdEggCommandHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
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
                await _context.Birds.AnyAsync(b => b.RingNumber == ringNumber && b.Id != existingEgg.BirdId, cancellationToken))
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
                                           .ThenInclude(f => f.Owner)
                                           .FirstOrDefaultAsync(c => c.Id == existingEgg.CoupleId, cancellationToken);
                if (couple == null)
                {
                    return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.NotFound)
                                    .AddError($"No couple found with id {existingEgg.CoupleId}");
                }

                // The young bird belongs to the owner of the couple (the owner of the father)
                // and was bred by the breeder record of that same person.
                var owner = couple.Father.Owner;
                var breeder = await _context.Breeders.FirstOrDefaultAsync(b => b.Email == owner.Email, cancellationToken)
                              ?? await _context.Breeders.FirstOrDefaultAsync(b => b.FirstName == owner.FirstName && b.LastName == owner.LastName, cancellationToken);
                if (breeder == null)
                {
                    return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                    .AddError($"No breeder found for owner {owner.FirstName} {owner.LastName}. Create a breeder with the same name or email first.");
                }

                var newBird = new Domain.AggregatesModel.BirdAggregate.Bird(
                    ringNumber,
                    model.Gender,
                    couple.Father.BirdType,
                    model.CameOutOn.Value,
                    model.Color,
                    couple.CageNumber);
                newBird.BelongsToOwner(owner);
                newBird.BelongsToBreeder(breeder);

                await _context.Birds.AddAsync(newBird, cancellationToken);
                await _context.SaveChangesAsync();

                // The id is only known after saving
                existingEgg.BirdId = newBird.Id;
            }

            await _context.SaveChangesAsync();

            var result = _mapper.Map<BirdEgg, BirdEggInputModel>(existingEgg);
            return new BaseResponse<BirdEggInputModel>(result);
        }
    }
}
