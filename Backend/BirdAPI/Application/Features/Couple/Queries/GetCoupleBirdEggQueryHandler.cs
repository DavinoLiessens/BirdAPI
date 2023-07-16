using AutoMapper;
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
        private readonly IMapper _mapper;

        public GetCoupleBirdEggQueryHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<BirdEggResponseModel>> Handle(GetCoupleBirdEggQuery request, CancellationToken cancellationToken)
        {
            // get birdEgg
            var existingBirdEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.CoupleId == request.CoupleId && be.Id == request.BirdEggId);

            if (existingBirdEgg == null)
            {
                return new BaseResponse<BirdEggResponseModel>(false, HttpStatusCode.BadRequest)
                .AddError($"No birdEgg found with id {request.BirdEggId}");
            }

            // return birdEgg
            var result = _mapper.Map<BirdEgg, BirdEggResponseModel>(existingBirdEgg);

            return new BaseResponse<BirdEggResponseModel>(result);
        }
    }
}
