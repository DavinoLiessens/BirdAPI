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
        public Breeder.ResponseModels.BreederResponseModel Breeder { get; set; }
        public Owner.ResponseModels.OwnerResponseModel Owner { get; set; }
        public BirdType BirdType{ get; set; }
        public bool IsDead { get; set; }
    }
}
