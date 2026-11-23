using BirdAPI.Domain.Enums;

namespace BirdAPI.Application.Features.Bird.Commands.InputModels
{
    public class BirdInputModel
    {
        public string RingNumber { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public string CageNumber { get; set; }
        public string Color { get; set; }
        public int? BreederId { get; set; } // empty = the kwekerij itself
        public int? OwnerId { get; set; } // empty = the kwekerij itself
        public string Description { get; set; }
        public BirdType BirdType { get; set; }
        public bool IsDead { get; set; }
    }
}
