using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdsQuery : IRequest<BaseResponse<PagedResponse<BirdResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }

        public GetBirdsQuery(int? page, int? pageSize)
        {
            Page = page;
            PageSize = pageSize;
        }
    }
}
