using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class UpdateCoupleBirdEggCommand : IRequest<BaseResponse<BirdEggInputModel>>
    {
        public BirdEggInputModel Model { get; set; }

        public UpdateCoupleBirdEggCommand(BirdEggInputModel model)
        {
            Model = model;
        }
    }
}
