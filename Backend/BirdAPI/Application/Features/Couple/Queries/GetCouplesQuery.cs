using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCouplesQuery : IRequest<BaseResponse<PagedResponse<CouplesResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }
        public string? SearchValue { get; set; }

        public GetCouplesQuery(int? page, int? pageSize, string? searchValue)
        {
            Page = page;
            PageSize = pageSize;
            SearchValue = searchValue;
        }
    }
}
