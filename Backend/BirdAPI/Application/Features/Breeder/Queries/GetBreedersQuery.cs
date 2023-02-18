using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreedersQuery : IRequest<BaseResponse<PagedResponse<BreederResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }

        public GetBreedersQuery(int? page, int? pageSize)
        {
            Page = page;
            PageSize = pageSize;
        }
    }
}
