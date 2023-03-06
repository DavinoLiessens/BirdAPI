using BirdAPI.Application.Features.Breeder.Commands.InputModel;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Breeder.Commands
{
    public class CreateBreederCommand : IRequest<BaseResponse<object>>
    {
        public CreateBreederInputModel Model { get; set; }

        public CreateBreederCommand(CreateBreederInputModel model)
        {
            Model = model;
        }
    }
}
