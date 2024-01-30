using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Owner.Queries
{
    public class GetOwnersQuery : IRequest<BaseResponse<PagedResponse<OwnerResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }
        public string? SearchValue { get; set; }

        public GetOwnersQuery(int? page, int? pageSize, string? searchValue)
        {
            Page = page;
            PageSize = pageSize;
            SearchValue = searchValue;
        }
    }
}
