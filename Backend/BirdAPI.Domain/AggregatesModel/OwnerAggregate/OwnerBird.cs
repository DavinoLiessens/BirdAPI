using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.OwnerAggregate
{
    public class OwnerBird : EntityLong
    {
        public int OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        public int BirdId { get; set; }
        public virtual Bird Bird { get; set; }

        public OwnerBird()
        {

        }

        public OwnerBird(Owner owner, Bird bird)
        {
            Owner = owner;
            Bird = bird;
        }
    }
}
