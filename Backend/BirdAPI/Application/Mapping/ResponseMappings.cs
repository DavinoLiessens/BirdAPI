using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;

namespace BirdAPI.Application.Mapping
{
    /// <summary>
    /// Explicit entity -> response mappings (replaces AutoMapper).
    /// Every field is visible here, so a renamed property is a compile error instead of a silent null.
    /// </summary>
    public static class ResponseMappings
    {
        public static OwnerResponseModel ToResponse(this Owner owner) => new()
        {
            Id = owner.Id,
            FirstName = owner.FirstName,
            LastName = owner.LastName,
            Email = owner.Email,
            PhoneNumber = owner.PhoneNumber,
        };

        public static BreederResponseModel ToResponse(this Breeder breeder) => new()
        {
            Id = breeder.Id,
            FirstName = breeder.FirstName,
            LastName = breeder.LastName,
            Email = breeder.Email,
            PhoneNumber = breeder.PhoneNumber,
        };

        public static BirdResponseModel ToResponse(this Bird bird) => new()
        {
            Id = bird.Id,
            RingNumber = bird.RingNumber,
            Gender = bird.Gender,
            BirthDate = bird.BirthDate,
            CageNumber = bird.CageNumber,
            Color = bird.Color,
            Breeder = bird.Breeder?.ToResponse(),
            Owner = bird.Owner?.ToResponse(),
            BirdType = bird.BirdType,
            IsDead = bird.IsDead ?? false,
        };

        public static BirdDetailResponseModel ToDetailResponse(this Bird bird) => new()
        {
            Id = bird.Id,
            RingNumber = bird.RingNumber,
            Gender = bird.Gender,
            BirthDate = bird.BirthDate,
            CageNumber = bird.CageNumber,
            Color = bird.Color,
            Breeder = bird.Breeder?.ToResponse(),
            Owner = bird.Owner?.ToResponse(),
            Description = bird.Description,
            BirdType = bird.BirdType,
            IsDead = bird.IsDead ?? false,
            BirdShows = bird.BirdShows?.Select(ToResponse).ToList() ?? new List<BirdShowResponseModel>(),
        };

        public static BirdShowResponseModel ToResponse(this BirdShow show) => new()
        {
            Id = show.Id,
            BirdId = show.BirdId,
            Location = show.Location,
            Rank = show.Rank,
            Points = show.Points,
        };

        public static BirdEggResponseModel ToResponse(this BirdEgg egg) => new()
        {
            Id = egg.Id,
            LayedOn = egg.LayedOn,
            CameOutOn = egg.CameOutOn,
            RingNumber = egg.RingNumber,
            FlyOutOn = egg.FlyOutOn,
            CoupleId = egg.CoupleId,
            Gender = egg.Gender,
            Color = egg.Color,
            BirdId = egg.BirdId,
        };

        public static BirdEggInputModel ToInputModel(this BirdEgg egg) => new()
        {
            Id = egg.Id,
            LayedOn = egg.LayedOn,
            CameOutOn = egg.CameOutOn,
            RingNumber = egg.RingNumber,
            FlyOutOn = egg.FlyOutOn,
            Gender = egg.Gender,
            Color = egg.Color,
            CoupleId = egg.CoupleId,
        };

        public static CouplesResponseModel ToListResponse(this Couple couple) => new()
        {
            Id = couple.Id,
            Name = couple.Name,
            CageNumber = couple.CageNumber,
            StartedAt = couple.StartedAt,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
        };

        public static CoupleResponseModel ToResponse(this Couple couple) => new()
        {
            Id = couple.Id,
            Name = couple.Name,
            StartedAt = couple.StartedAt,
            CageNumber = couple.CageNumber,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
            Description = couple.Description,
            BirdEggs = couple.BirdEggs?.Select(ToResponse).ToList() ?? new List<BirdEggResponseModel>(),
        };

        public static CreatedCoupleResponseModel ToCreatedResponse(this Couple couple) => new()
        {
            Id = couple.Id,
            Name = couple.Name,
            StartedAt = couple.StartedAt,
            CageNumber = couple.CageNumber,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
            Description = couple.Description,
        };

        public static BirdCoupleResponseModel ToBirdCoupleResponse(this Couple couple) => new()
        {
            Id = couple.Id,
            Name = couple.Name,
            StartedAt = couple.StartedAt,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
        };
    }
}
