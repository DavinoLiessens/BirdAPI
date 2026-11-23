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
        public Contact.ResponseModels.ContactResponseModel Breeder { get; set; }
        public Contact.ResponseModels.ContactResponseModel Owner { get; set; }
        public BirdType BirdType{ get; set; }
        public bool IsDead { get; set; }
    }
}
