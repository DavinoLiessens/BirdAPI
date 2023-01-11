using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class AddBirdCommand : IRequest<BaseResponse<ResponseModels.BirdResponseModel>>
    {
        public BirdInputModel Model { get; set; }

        public AddBirdCommand(BirdInputModel model)
        {
            Model = model;
        }
    }
}
