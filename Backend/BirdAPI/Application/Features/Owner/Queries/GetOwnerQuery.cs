using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Owner.Queries
{
    public class GetOwnerQuery : IRequest<BaseResponse<OwnerResponseModel>>
    {
        public int OwnerId { get; set; }
        public GetOwnerQuery(int ownerId)
        {
            OwnerId = ownerId;
        }
    }
}
