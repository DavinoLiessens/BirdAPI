using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Queries
{
    public class GetCoupleBirdEggQuery : IRequest<BaseResponse<BirdEggResponseModel>>
    {
        public int CoupleId { get; set; }
        public int BirdEggId { get; set; }

        public GetCoupleBirdEggQuery(int coupleId, int id)
        {
            CoupleId = coupleId;
            BirdEggId = id;
        }
    }
}
