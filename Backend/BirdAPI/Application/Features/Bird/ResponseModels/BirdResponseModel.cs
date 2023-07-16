using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.Enums;

namespace BirdAPI.Application.Features.Bird.ResponseModels
{
    public class BirdResponseModel
    {
        public int Id { get; set; }
        public string RingNumber { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate{ get; set; }
        public string CageNumber { get; set; }
        public string Color { get; set; }
        public Domain.AggregatesModel.BreederAggregate.Breeder Breeder { get; set; }
        public Domain.AggregatesModel.OwnerAggregate.Owner Owner { get; set; }
        public string Description { get; set; }
        public BirdType BirdType{ get; set; }
        public GenderType GenderType { get; set; }
        public bool Dead { get; set; }
        public int? CoupleId { get; set; }
    }
}
