using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class BirdEgg : Entity
    {
        public DateTime LayedOn { get; set; }
        public DateTime? CameOutOn { get; set; }
        public string? RingNumber { get; set; }
        public DateTime? FlyOutOn { get; set; }
        public int CoupleId { get; set; }
    }
}
