using AutoMapper;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdQueryHandler : IRequestHandler<GetBirdQuery, BaseResponse<BirdResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;

        public GetBirdQueryHandler(
            BirdAPIContext context,
            IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<BirdResponseModel>> Handle(GetBirdQuery request, CancellationToken cancellationToken)
        {
            // get breeder from request
            var existingBird = await _context.Birds
                                                .Include(b => b.Owner)
                                                .Include(b => b.Breeder)
                                                .FirstOrDefaultAsync(b => b.Id == request.BirdId);

            if (existingBird == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Bird with id '{request.BirdId}' does not exist");
            }

            var result = _mapper.Map<BirdResponseModel>(existingBird);

            // set CoupleId if bird has a couple
            if (await _context.BirdEggs.AnyAsync(be => be.RingNumber == existingBird.RingNumber))
            {
                var coupleIdForBird = await _context.BirdEggs
                                                        .Where(be => be.RingNumber == existingBird.RingNumber)
                                                        .Select(be => be.CoupleId)
                                                        .FirstOrDefaultAsync();

                result.CoupleId = coupleIdForBird;
            }

            return new BaseResponse<BirdResponseModel>(result);
        }
    }
}
