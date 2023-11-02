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

        public BirdEgg(int coupleId, DateTime layedOn, DateTime? cameOutOn, DateTime? flyOutOn, string? ringNumber)
        {
            CoupleId = coupleId;
            LayedOn = layedOn;
            CameOutOn = cameOutOn;
            FlyOutOn = flyOutOn;
            RingNumber = ringNumber;
        }

        public BirdEgg UpdateCameOutOn(DateTime? cameOutOn)
        {
            CameOutOn = cameOutOn;

            return this;
        }

        public BirdEgg UpdateFlyOutOn(DateTime? flyOutOn)
        {
            FlyOutOn = flyOutOn;

            return this;
        }

        public BirdEgg UpdateRingNumber(string? ringNumber)
        {
            RingNumber = ringNumber;

            return this;
        }
    }
}
