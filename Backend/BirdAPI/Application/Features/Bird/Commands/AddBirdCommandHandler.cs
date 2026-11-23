using BirdAPI.Application.Common;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.Application.Mapping;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class AddBirdCommandHandler : IRequestHandler<AddBirdCommand, BaseResponse<BirdResponseModel>>
    {
        private readonly BirdAPIContext _context;

        public AddBirdCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<BirdResponseModel>> Handle(AddBirdCommand request, CancellationToken cancellationToken)
        {
            var model = request.Model;

            if (string.IsNullOrWhiteSpace(model.RingNumber))
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError("Validation Error: Ringnumber is required!");
            }

            var normalized = RingNumber.Normalize(model.RingNumber);
            if (await _context.Birds.AnyAsync(b => b.NormalizedRingNumber == normalized, cancellationToken))
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Bird with ringnumber '{model.RingNumber}' already exists");
            }

            // Breeder and owner default to the kwekerij itself (the logged-in user)
            var breeder = await _context.GetContactOrSelfAsync(model.BreederId, cancellationToken);
            if (breeder == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No breeder found with id '{model.BreederId}'");
            }

            var owner = await _context.GetContactOrSelfAsync(model.OwnerId, cancellationToken);
            if (owner == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No owner found with id '{model.OwnerId}'");
            }

            var newBird = new Domain.AggregatesModel.BirdAggregate.Bird(
                model.RingNumber,
                model.Gender,
                model.BirdType,
                model.BirthDate,
                model.Color,
                model.CageNumber,
                model.Description,
                model.IsDead);
            newBird.BelongsToBreeder(breeder);
            newBird.BelongsToOwner(owner);

            await _context.Birds.AddAsync(newBird, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return new BaseResponse<BirdResponseModel>(newBird.ToResponse());
        }
    }
}
