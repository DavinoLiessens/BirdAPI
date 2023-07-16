using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

namespace BirdAPI.Application.Features.Couple.Commands.InputModels
{
    public class CreateCoupleInputModel
    {
        public string Name { get; set; }
        public DateTime StartedAt { get; set; }
        public int CageNumber { get; set; }
        public int FatherId { get; set; }
        public int MotherId { get; set; }
        public string Description { get; set; }
    }
}
