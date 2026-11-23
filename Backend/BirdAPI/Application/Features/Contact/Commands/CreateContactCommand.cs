using BirdAPI.Application.Features.Contact.Commands.InputModel;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Contact.Commands
{
    public class CreateContactCommand : IRequest<BaseResponse<object>>
    {
        public CreateContactInputModel Model { get; set; }

        public CreateContactCommand(CreateContactInputModel model)
        {
            Model = model;
        }
    }
}
