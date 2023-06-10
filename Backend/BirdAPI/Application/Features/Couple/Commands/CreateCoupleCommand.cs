using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class CreateCoupleCommand : IRequest<BaseResponse<object>>
    {
        public CreateCoupleInputModel Model { get; set; }

        public CreateCoupleCommand(CreateCoupleInputModel model)
        {
            Model = model;
        }
    }
}
