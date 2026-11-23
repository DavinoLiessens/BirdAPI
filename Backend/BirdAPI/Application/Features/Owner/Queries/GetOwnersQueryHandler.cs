using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Owner.Queries
{
    public class GetOwnersQueryHandler : IRequestHandler<GetOwnersQuery, BaseResponse<PagedResponse<OwnerResponseModel>>>
    {
        private readonly BirdAPIContext _context;

        public GetOwnersQueryHandler(
            BirdAPIContext context
            )
        {
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<OwnerResponseModel>>> Handle(GetOwnersQuery request, CancellationToken cancellationToken)
        {
            var owners = _context.Owners.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.SearchValue))
            {
                owners = owners.Where(o => o.FirstName.StartsWith(request.SearchValue) ||
                                           o.LastName.StartsWith(request.SearchValue));
            }

            var result = await owners.OrderBy(o => o.Id).GetPaged(request.Page, request.PageSize, x => x.ToResponse());

            return new BaseResponse<PagedResponse<OwnerResponseModel>>(result);

        }
    }
}
