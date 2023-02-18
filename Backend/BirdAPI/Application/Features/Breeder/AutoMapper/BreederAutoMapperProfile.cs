using AutoMapper;
using BirdAPI.Application.Features.Breeder.ResponseModels;

namespace BirdAPI.Application.Features.Breeder.AutoMapper
{
    public class BreederAutoMapperProfile : Profile
    {
        public BreederAutoMapperProfile()
        {
            CreateMap<Domain.AggregatesModel.BreederAggregate.Breeder, BreederResponseModel>();
        }
    }
}
