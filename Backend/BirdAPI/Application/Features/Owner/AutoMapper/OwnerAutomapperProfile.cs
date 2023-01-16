using AutoMapper;
using BirdAPI.Application.Features.Owner.ResponseModels;

namespace BirdAPI.Application.Features.Owner.AutoMapper
{
    public class OwnerAutomapperProfile : Profile
    {
        public OwnerAutomapperProfile()
        {
            CreateMap<Domain.AggregatesModel.OwnerAggregate.Owner, OwnerResponseModel>();
        }
    }
}
