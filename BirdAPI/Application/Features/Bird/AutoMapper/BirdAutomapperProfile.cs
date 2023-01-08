using AutoMapper;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;

namespace BirdAPI.Application.Features.Bird.AutoMapper
{
    public class BirdAutomapperProfile : Profile
    {
        public BirdAutomapperProfile()
        {
            CreateMap<Domain.AggregatesModel.BirdAggregate.Bird, BirdResponseModel>();
        }
    }
}
