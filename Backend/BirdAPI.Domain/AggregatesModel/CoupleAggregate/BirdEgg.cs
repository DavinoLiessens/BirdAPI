using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class BirdEgg : Entity
    {
        public DateTime LayedOn { get; private set; }
        public DateTime CameOutOn { get; private set; }
        public string RingNumber { get; private set; }
        public DateTime FlyOutOn { get; private set; }

        public Couple Couple { get; set; }
        public int CoupleId { get; set; }
    }
}
