using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreederQuery : IRequest<BaseResponse<BreederResponseModel>>
    {
        public int BreederId { get; set; }

        public GetBreederQuery(int breederId)
        {
            BreederId = breederId;
        }
    }
}
