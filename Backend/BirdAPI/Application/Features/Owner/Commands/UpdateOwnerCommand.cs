using BirdAPI.Application.Features.Owner.Commands.InputModel;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Owner.Commands
{
    public class UpdateOwnerCommand : IRequest<BaseResponse<object>>
    {
        public int Id { get; set; }
        public UpdateOwnerInputModel Model { get; set; }

        public UpdateOwnerCommand(int id, UpdateOwnerInputModel model)
        {
            Id = id;
            Model = model;
        }
    }
}
