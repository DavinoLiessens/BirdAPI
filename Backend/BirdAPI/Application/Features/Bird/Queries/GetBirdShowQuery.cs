using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdShowQuery : IRequest<BaseResponse<BirdShowResponseModel>>
    {
        public int BirdId { get; set; }
        public int Id { get; set; }

        public GetBirdShowQuery(int birdId, int id)
        {
            BirdId = birdId;
            Id = id;
        }
    }
}
