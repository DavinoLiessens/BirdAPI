using AutoMapper;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
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
            var existingEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.Id == request.Model.Id);

            if (existingEgg == null)
            {
                return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                .AddError($"No birdEgg found with id {request.Model.Id}");
            }

            // check if ringnumber is unique
            if (await _context.Birds.AnyAsync(b => b.RingNumber == request.Model.RingNumber))
            {
                return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                .AddError($"Bird with ringnumber {request.Model.RingNumber} already exist!");
            }

            if (request.Model.CameOutOn != existingEgg.CameOutOn)
            {
                existingEgg.UpdateCameOutOn(request.Model.CameOutOn);
            }

            if (request.Model.FlyOutOn != existingEgg.FlyOutOn)
            {
                existingEgg.UpdateFlyOutOn(request.Model.FlyOutOn);
            }

            if (request.Model.Gender != existingEgg.Gender)
            {
                existingEgg.UpdateGender(request.Model.Gender);
            }

            if (request.Model.Color != existingEgg.Color)
            {
                existingEgg.UpdateColor(request.Model.Color);
            }

            if (request.Model.RingNumber != existingEgg.RingNumber)
            {
                existingEgg.UpdateRingNumber(request.Model.RingNumber);
            }

            // create new bird if all values are filled in and the bird does not exist yet
            if (request.Model.CameOutOn != null && 
                request.Model.FlyOutOn != null && 
                request.Model.RingNumber != null && 
                request.Model.Color != null && 
                request.Model.Gender != null &&
                existingEgg.BirdId == null)
            {               
                var couple = await _context.Couples.Include(c => c.Father).FirstOrDefaultAsync(c => c.Id == request.Model.CoupleId);
                var breeder = await _context.Breeders.FirstOrDefaultAsync(b => b.FirstName == "Gerry" && b.LastName == "Liessens");
                var owner = await _context.Owners.FirstOrDefaultAsync(o => o.FirstName == "Gerry" && o.LastName == "Liessens");

                var birdType = couple.Father.BirdType;
                var cageNumber = couple.CageNumber;
                var newBird = new Domain.AggregatesModel.BirdAggregate.Bird(request.Model.RingNumber, request.Model.Gender, birdType, (DateTime)request.Model.CameOutOn, request.Model.Color, cageNumber);
                newBird.BelongsToOwner(owner);
                newBird.BelongsToBreeder(breeder);

                await _context.Birds.AddAsync(newBird);
                await _context.SaveChangesAsync();

                // assign the birdId after saveChanges
                existingEgg.BirdId = newBird.Id;
            }

            var result = _mapper.Map<BirdEgg, BirdEggInputModel>(existingEgg);

            await _context.SaveChangesAsync();

            return new BaseResponse<BirdEggInputModel>(result);
        }
    }
}
