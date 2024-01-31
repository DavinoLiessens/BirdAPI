using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreedersQuery : IRequest<BaseResponse<PagedResponse<BreederResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }
        public string? SearchValue { get; set; }

        public GetBreedersQuery(int? page, int? pageSize, string? searchValue)
        {
            Page = page;
            PageSize = pageSize;
            SearchValue = searchValue;
        }
    }
}
