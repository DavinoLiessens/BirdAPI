using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdQueryHandler : IRequestHandler<GetBirdQuery, BaseResponse<BirdDetailResponseModel>>
    {
        private readonly BirdAPIContext _context;

        public GetBirdQueryHandler(
            BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<BirdDetailResponseModel>> Handle(GetBirdQuery request, CancellationToken cancellationToken)
        {
            // get breeder from request
            var existingBird = await _context.Birds
                                                .Include(b => b.Owner)
                                                .Include(b => b.Breeder)
                                                .Include(b => b.BirdShows)
                                                .FirstOrDefaultAsync(b => b.Id == request.BirdId);

            if (existingBird == null)
            {
                return new BaseResponse<BirdDetailResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"Bird with id '{request.BirdId}' does not exist");
            }

            var result = existingBird.ToDetailResponse();

            // add couples to model
            var coupleMatchesForBird = await _context.BirdCouples
                                                        .Include(bc => bc.Couple)
                                                        .ThenInclude(c => c.Father)
                                                        .Include(bc => bc.Couple)
                                                        .ThenInclude(c => c.Mother)
                                                        .Where(bc => bc.BirdId == request.BirdId)
                                                        .Select(bc => bc.Couple)
                                                        .ToListAsync();

            result.BirdCouples = coupleMatchesForBird.Select(c => c.ToBirdCoupleResponse()).ToList();

            // add father and mother to model
            var coupleWhereBirdIsBorn = await _context.Couples
                                         .Include(c => c.BirdEggs)
                                         .Include(c => c.Father)
                                         .Include(c => c.Mother)
                                         .FirstOrDefaultAsync(c => c.BirdEggs.Any(be => be.BirdId == existingBird.Id ||
                                                                        (be.BirdId == null && be.RingNumber == existingBird.RingNumber)));

            if (coupleWhereBirdIsBorn != null)
            {
                result.Parents = new BirdParentResponseModel()
                {
                    FatherId = coupleWhereBirdIsBorn.FatherId,
                    MotherId = coupleWhereBirdIsBorn.MotherId,
                    FatherRingNumber = coupleWhereBirdIsBorn.Father.RingNumber,
                    MotherRingNumber = coupleWhereBirdIsBorn.Mother.RingNumber,
                    CoupleId = coupleWhereBirdIsBorn.Id
                };
            }

            // add bird shows
            var birdShows = await _context.BirdShows.Where(bs => bs.BirdId == existingBird.Id).ToListAsync();
            result.BirdShows = birdShows.Select(bs => bs.ToResponse()).ToList();

            return new BaseResponse<BirdDetailResponseModel>(result);
        }
    }
}
