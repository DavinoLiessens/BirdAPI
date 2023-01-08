using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.OwnerAggregate
{
    public class OwnerBird : EntityLong
    {
        public long OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        public long BirdId { get; set; }
        public virtual Bird Bird { get; set; }

        public OwnerBird()
        {

        }

        public OwnerBird(int ownerId, Bird bird)
        {
            OwnerId = ownerId;
            Bird = bird;
        }
    }
}
