using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

namespace BirdAPI.Application.Features.Couple.ResponseModels
{
    public class CoupleResponseModel
    {
        public string Name { get; set; }
        public DateTime StartedAt { get; set; }
        public int CageNumber { get; set; }
        public string MotherRingNumber { get; set; }
        public string FatherRingNumber { get; set; }
        public List<BirdEgg> BirdEggs{ get; set; }
    }
}
