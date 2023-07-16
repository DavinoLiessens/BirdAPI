using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCoupleQuery : IRequest<BaseResponse<CoupleResponseModel>>
    {
        public int CoupleId { get; set; }

        public GetCoupleQuery(int coupleId)
        {
            CoupleId = coupleId;
        }
    }
}
