using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

namespace BirdAPI.Application.Features.Couple.Commands.InputModels
{
    public class CreateCoupleInputModel
    {
        public string Name { get; set; }
        public DateTime StartedAt { get; set; }
        /// <summary>Breeding season; defaults to the year of StartedAt.</summary>
        public int? Year { get; set; }
        /// <summary>Breeding round within the year: 1 or 2.</summary>
        public int Round { get; set; } = 1;
        public string CageNumber { get; set; }
        public int FatherId { get; set; }
        public int MotherId { get; set; }
        public string Description { get; set; }
    }
}
