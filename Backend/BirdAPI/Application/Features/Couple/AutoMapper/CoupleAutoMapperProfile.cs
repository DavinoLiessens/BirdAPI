using AutoMapper;
using BirdAPI.Application.Features.Couple.ResponseModels;

namespace BirdAPI.Application.Features.Couple.AutoMapper
{
    public class CoupleAutoMapperProfile : Profile
    {
        public CoupleAutoMapperProfile()
        {
            CreateMap<Domain.AggregatesModel.CoupleAggregate.Couple, CouplesResponseModel>()
                .ForMember(dest => dest.MotherRingNumber, src => src.MapFrom(src => src.Mother.RingNumber))
                .ForMember(dest => dest.FatherRingNumber, src => src.MapFrom(src => src.Father.RingNumber));

            CreateMap<Domain.AggregatesModel.CoupleAggregate.Couple, CoupleResponseModel>()
                .ForMember(dest => dest.MotherRingNumber, src => src.MapFrom(src => src.Mother.RingNumber))
                .ForMember(dest => dest.FatherRingNumber, src => src.MapFrom(src => src.Father.RingNumber));
        }
    }
}
