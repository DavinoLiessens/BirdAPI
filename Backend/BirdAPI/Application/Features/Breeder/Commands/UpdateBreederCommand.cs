using BirdAPI.Application.Features.Breeder.Commands.InputModel;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Breeder.Commands
{
    public class UpdateBreederCommand : IRequest<BaseResponse<object>>
    {
        public int Id { get; set; }
        public UpdateBreederInputModel Model { get; set; }

        public UpdateBreederCommand(int id, UpdateBreederInputModel model)
        {
            Id = id;
            Model = model;
        }
    }
}
