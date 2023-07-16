using AutoMapper;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

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

            CreateMap<BirdEggInputModel, BirdEgg>().ReverseMap();
            CreateMap<BirdEggResponseModel, BirdEgg>().ReverseMap();


            CreateMap<Domain.AggregatesModel.CoupleAggregate.Couple, CreatedCoupleResponseModel>()
                .ForMember(dest => dest.MotherRingNumber, src => src.MapFrom(src => src.Mother.RingNumber))
                .ForMember(dest => dest.FatherRingNumber, src => src.MapFrom(src => src.Father.RingNumber));
        }
    }
}
