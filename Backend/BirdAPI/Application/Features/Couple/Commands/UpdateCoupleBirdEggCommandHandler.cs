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
            var existingEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.Id == request.Model.Id);

            if (existingEgg == null)
            {
                return new BaseResponse<BirdEggInputModel>(false, HttpStatusCode.BadRequest)
                                .AddError($"No birdEgg found with id {request.Model.Id}");
            }

            if (request.Model.CameOutOn != existingEgg.CameOutOn)
            {
                existingEgg.UpdateCameOutOn(request.Model.CameOutOn);
            }

            if (request.Model.RingNumber != existingEgg.RingNumber)
            {
                existingEgg.UpdateRingNumber(request.Model.RingNumber);
            }

            if (request.Model.FlyOutOn != existingEgg.FlyOutOn)
            {
                existingEgg.UpdateFlyOutOn(request.Model.FlyOutOn);
            }

            if (request.Model.CameOutOn != null && request.Model.RingNumber != null)
            {
                // create new Bird in DB
                // TODO to think about
                // Because we don't have gender, color, birdtype, ....
            }

            var result = _mapper.Map<BirdEgg, BirdEggInputModel>(existingEgg);

            await _context.SaveChangesAsync();

            return new BaseResponse<BirdEggInputModel>(result);
        }
    }
}
