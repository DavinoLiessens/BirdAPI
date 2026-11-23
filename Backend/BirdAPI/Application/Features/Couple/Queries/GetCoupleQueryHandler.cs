using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCoupleQueryHandler : IRequestHandler<GetCoupleQuery, BaseResponse<CoupleResponseModel>>
    {
        private readonly BirdAPIContext _context;

        public GetCoupleQueryHandler(
            BirdAPIContext context
            )
        {
            _context = context;
        }

        public async Task<BaseResponse<CoupleResponseModel>> Handle(GetCoupleQuery request, CancellationToken cancellationToken)
        {
            var existingCouple = await _context.Couples
                                            .Include(c => c.Father)
                                            .Include(c => c.Mother)
                                            .Include(c => c.BirdEggs)
                                            .AsNoTracking()
                                            .FirstOrDefaultAsync(c => c.Id == request.CoupleId);

            if (existingCouple == null)
            {
                return new BaseResponse<CoupleResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"Couple with id '{request.CoupleId}' does not exist");
            }

            var result = existingCouple.ToResponse();

            return new BaseResponse<CoupleResponseModel>(result);
        }
    }
}
