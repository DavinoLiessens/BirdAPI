using AutoMapper;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCouplesQueryHandler : IRequestHandler<GetCouplesQuery, BaseResponse<PagedResponse<CouplesResponseModel>>>
    {
        private readonly IMapper _mapper;
        private readonly BirdAPIContext _context;

        public GetCouplesQueryHandler(
            IMapper mapper,
            BirdAPIContext context
            )
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<CouplesResponseModel>>> Handle(GetCouplesQuery request, CancellationToken cancellationToken)
        {
            var couples = await _context.Couples
                                            .Include(c => c.Father)
                                            .Include(c => c.Mother)
                                            .AsNoTracking()
                                            .ToListAsync();

            var result = await couples.GetPaged<Domain.AggregatesModel.CoupleAggregate.Couple, CouplesResponseModel>(request.Page, request.PageSize, _mapper);

            return new BaseResponse<PagedResponse<CouplesResponseModel>>(result);
        }
    }
}
