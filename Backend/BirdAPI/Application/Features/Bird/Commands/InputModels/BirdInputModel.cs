using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.Enums;

namespace BirdAPI.Application.Features.Bird.Commands.InputModels
{
    public class BirdInputModel
    {
        public string RingNumber { get; set; }
        public string Gender { get; set; }
        public DateTime BirthDate { get; set; }
        public int CageNumber { get; set; }
        public string Color { get; set; }
        public int BreederId { get; set; }
        public int OwnerId { get; set; }
        public string Description { get; set; }
        public BirdType BirdType { get; set; }
        public bool IsChild { get; set; }
        public bool Dead { get; set; }
    }
}
