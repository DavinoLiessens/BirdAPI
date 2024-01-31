using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class CreateBirdShowCommand : IRequest<BaseResponse<object>>
    {
        public BirdShowInputModel Model { get; set; }

        public CreateBirdShowCommand(BirdShowInputModel model)
        {
            Model = model;
        }
    }
}
