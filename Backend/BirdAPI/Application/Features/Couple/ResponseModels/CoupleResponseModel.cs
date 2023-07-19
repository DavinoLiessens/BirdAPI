using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

namespace BirdAPI.Application.Features.Couple.ResponseModels
{
    public class CoupleResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartedAt { get; set; }
        public string CageNumber { get; set; }
        public string MotherRingNumber { get; set; }
        public string FatherRingNumber { get; set; }
        public string Description { get; set; }
        public List<BirdEgg> BirdEggs{ get; set; }
    }
}
