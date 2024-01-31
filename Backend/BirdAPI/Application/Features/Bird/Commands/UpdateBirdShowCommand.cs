using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class UpdateBirdShowCommand : IRequest<BaseResponse<object>>
    {
        public int Id { get; set; }
        public BirdShowInputModel Model { get; set; }

        public UpdateBirdShowCommand(int id, BirdShowInputModel model)
        {
            Model = model;
            Id = id;
        }
    }
}
