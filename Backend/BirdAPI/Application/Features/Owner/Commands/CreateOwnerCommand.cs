using BirdAPI.Application.Features.Owner.Commands.InputModel;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Owner.Commands
{
    public class CreateOwnerCommand : IRequest<BaseResponse<object>>
    {
        public CreateOwnerInputModel Model { get; set; }

        public CreateOwnerCommand(CreateOwnerInputModel model)
        {
            Model = model;
        }
    }
}
