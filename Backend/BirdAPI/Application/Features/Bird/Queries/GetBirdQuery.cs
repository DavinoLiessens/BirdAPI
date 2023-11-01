using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdQuery : IRequest<BaseResponse<BirdDetailResponseModel>>
    {
        public int BirdId { get; set; }

        public GetBirdQuery(int birdId)
        {
            BirdId = birdId;
        }
    }
}
