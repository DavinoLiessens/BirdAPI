using BirdAPI.Application.Features.Contact.Commands.InputModel;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Contact.Commands
{
    public class UpdateContactCommand : IRequest<BaseResponse<object>>
    {
        public int Id { get; set; }
        public UpdateContactInputModel Model { get; set; }

        public UpdateContactCommand(int id, UpdateContactInputModel model)
        {
            Id = id;
            Model = model;
        }
    }
}
