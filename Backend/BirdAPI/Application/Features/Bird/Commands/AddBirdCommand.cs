using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class AddBirdCommand : IRequest<BaseResponse<BirdResponseModel>>
    {
        public BirdInputModel Model { get; set; }

        public AddBirdCommand(BirdInputModel model)
        {
            Model = model;
        }
    }
}
