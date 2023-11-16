using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class BirdEgg : Entity
    {
        public DateTime LayedOn { get; set; }
        public DateTime? CameOutOn { get; set; }
        public string? RingNumber { get; set; }
        public DateTime? FlyOutOn { get; set; }
        public string? Gender { get; set; }
        public string? Color { get; set; }
        public int? BirdId { get; set; }
        public int CoupleId { get; set; }

        public BirdEgg(int coupleId, DateTime layedOn, DateTime? cameOutOn, DateTime? flyOutOn, string? ringNumber, string? gender, string? color)
        {
            CoupleId = coupleId;
            LayedOn = layedOn;
            CameOutOn = cameOutOn;
            FlyOutOn = flyOutOn;
            RingNumber = ringNumber;
            Gender = gender;
            Color = color;
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

        public BirdEgg UpdateGender(string? gender)
        {
            Gender = gender;

            return this;
        }

        public BirdEgg UpdateColor(string? color)
        {
            Color = color;

            return this;
        }
    }
}
