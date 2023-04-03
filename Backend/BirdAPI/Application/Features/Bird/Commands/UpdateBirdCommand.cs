using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class UpdateBirdCommand : IRequest<BaseResponse<BirdResponseModel>>
    {
        public int Id { get; set; }
        public UpdateBirdInputModel Model { get; set; }

        public UpdateBirdCommand(int id, UpdateBirdInputModel model)
        {
            Id = id;
            Model = model;
        }
    }
}
