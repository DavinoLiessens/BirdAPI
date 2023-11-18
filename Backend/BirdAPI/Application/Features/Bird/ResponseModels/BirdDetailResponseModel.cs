using BirdAPI.Domain.Enums;

namespace BirdAPI.Application.Features.Bird.ResponseModels
{
    public class BirdDetailResponseModel
    {
        public int Id { get; set; }
        public string RingNumber { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string CageNumber { get; set; }
        public string Color { get; set; }
        public Domain.AggregatesModel.BreederAggregate.Breeder Breeder { get; set; }
        public Domain.AggregatesModel.OwnerAggregate.Owner Owner { get; set; }
        public string Description { get; set; }
        public BirdType BirdType { get; set; }
        public bool IsDead { get; set; }
        public List<BirdCoupleResponseModel> BirdCouples { get; set; }
        public BirdParentResponseModel Parents { get; set; }
        public List<BirdShowResponseModel> BirdShows { get; set; }
    }

    public class BirdParentResponseModel
    {
        public int FatherId { get; set; }
        public int MotherId { get; set; }
        public string FatherRingNumber { get; set; }
        public string MotherRingNumber { get; set; }
        public int CoupleId { get; set; }
    }

    public class BirdShowResponseModel
    {
        public int Id { get; set; }
        public int BirdId { get; set; }
        public string Location { get; set; }
        public int Rank { get; set; }
        public int Points { get; set; }
    }
}
