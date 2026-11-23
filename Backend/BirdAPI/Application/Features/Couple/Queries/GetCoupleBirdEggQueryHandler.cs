using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCoupleBirdEggQueryHandler : IRequestHandler<GetCoupleBirdEggQuery, BaseResponse<BirdEggResponseModel>>
    {
        private readonly BirdAPIContext _context;

        public GetCoupleBirdEggQueryHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<BirdEggResponseModel>> Handle(GetCoupleBirdEggQuery request, CancellationToken cancellationToken)
        {
            // get birdEgg
            var existingBirdEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.CoupleId == request.CoupleId && be.Id == request.BirdEggId);

            if (existingBirdEgg == null)
            {
                return new BaseResponse<BirdEggResponseModel>(false, HttpStatusCode.NotFound)
                .AddError($"No birdEgg found with id {request.BirdEggId}");
            }

            // return birdEgg
            var result = existingBirdEgg.ToResponse();

            return new BaseResponse<BirdEggResponseModel>(result);
        }
    }
}
