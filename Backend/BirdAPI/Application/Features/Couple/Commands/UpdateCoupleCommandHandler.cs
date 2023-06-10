using AutoMapper;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class UpdateCoupleCommandHandler : IRequestHandler<UpdateCoupleCommand, BaseResponse<CoupleResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;

        public UpdateCoupleCommandHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<CoupleResponseModel>> Handle(UpdateCoupleCommand request, CancellationToken cancellationToken)
        {
            var existingCouple = await _context.Couples
                                                    .Include(c => c.BirdEggs)
                                                    .FirstOrDefaultAsync(c => c.Id == request.Model.CoupleId);
            if (existingCouple == null)
            {
                return new BaseResponse<CoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No couple found with id {request.Model.CoupleId}");
            }

            existingCouple.UpdateCouple(request.Model.Description);

            // birdEggs
            var birdEggs = new List<BirdEgg>();
            foreach (var egg in request.Model.BirdEggs)
            {
                if (egg.Id == null)
                {
                    var newEgg = new BirdEgg(existingCouple.Id, egg.LayedOn, egg.CameOutOn ?? null, egg.FlyOutOn ?? null, egg.RingNumber ?? null);
                    birdEggs.Add(newEgg);
                }
                else
                {
                    var existingEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.Id == egg.Id);

                    if (existingEgg == null)
                    {
                        return new BaseResponse<CoupleResponseModel>(false, HttpStatusCode.BadRequest)
                                        .AddError($"No birdEgg found with id {egg.Id}");
                    }

                    if (egg.CameOutOn != null)
                    {
                        existingEgg.UpdateCameOutOn((DateTime)egg.CameOutOn);
                    }
                    if (egg.FlyOutOn != null)
                    {
                        existingEgg.UpdateFlyOutOn((DateTime)egg.FlyOutOn);
                    }
                    if(egg.RingNumber != null)
                    {
                        existingEgg.UpdateRingNumber((string)egg.RingNumber);
                    }
                }
            }

            if (birdEggs != null)
            {
                existingCouple.AddBirdEggs(birdEggs);
            }

            var result = _mapper.Map<Domain.AggregatesModel.CoupleAggregate.Couple, CoupleResponseModel>(existingCouple);
            await _context.SaveChangesAsync();

            return new BaseResponse<CoupleResponseModel>(result);
        }
    }
}
