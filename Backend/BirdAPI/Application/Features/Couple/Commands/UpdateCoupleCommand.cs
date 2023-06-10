using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class UpdateCoupleCommand : IRequest<BaseResponse<CoupleResponseModel>>
    {
        public UpdateCoupleInputModel Model{ get; set; }

        public UpdateCoupleCommand(UpdateCoupleInputModel model)
        {
            Model = model;
        }
    }
}
