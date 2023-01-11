using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.BreederAggregate
{
    public class BreederBird : EntityLong
    {
        public long BreederId { get; set; }
        public virtual Breeder Breeder { get; set; }
        public long BirdId { get; set; }
        public virtual Bird Bird { get; set; }

        public BreederBird(int breederId, Bird bird)
        {
            BreederId = breederId;
            Bird = bird;
        }
    }
}
