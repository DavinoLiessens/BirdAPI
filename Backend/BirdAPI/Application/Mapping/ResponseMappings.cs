using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.ContactAggregate;

namespace BirdAPI.Application.Mapping
{
    /// <summary>
    /// Explicit entity -> response mappings (replaces AutoMapper).
    /// Every field is visible here, so a renamed property is a compile error instead of a silent null.
    /// </summary>
    public static class ResponseMappings
    {
        public static ContactResponseModel ToResponse(this Contact contact) => new()
        {
            Id = contact.Id,
            FirstName = contact.FirstName,
            LastName = contact.LastName,
            Email = contact.Email,
            PhoneNumber = contact.PhoneNumber,
            IsSelf = contact.IsSelf,
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
            Year = couple.Year,
            Round = couple.Round,
            EndedAt = couple.EndedAt,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
        };

        public static CoupleResponseModel ToResponse(this Couple couple) => new()
        {
            Id = couple.Id,
            Name = couple.Name,
            StartedAt = couple.StartedAt,
            Year = couple.Year,
            Round = couple.Round,
            EndedAt = couple.EndedAt,
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
            Year = couple.Year,
            Round = couple.Round,
            EndedAt = couple.EndedAt,
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
            Year = couple.Year,
            Round = couple.Round,
            FatherRingNumber = couple.Father?.RingNumber,
            MotherRingNumber = couple.Mother?.RingNumber,
        };
    }
}
