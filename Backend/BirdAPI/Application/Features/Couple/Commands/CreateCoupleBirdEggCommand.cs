using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class CreateCoupleBirdEggCommand : IRequest<BaseResponse<object>>
    {
        public BirdEggInputModel Model { get; set; }

        public CreateCoupleBirdEggCommand(BirdEggInputModel model)
        {
            Model = model;
        }
    }
}
