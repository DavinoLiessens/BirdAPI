using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.BirdAggregate
{
    public class BirdShow : Entity
    {
        public string Location { get; set; }
        public int Points { get; set; }
        public int Rank { get; set; }

        public Bird Bird { get; set; }
        public int BirdId { get; set; }

        public BirdShow(string location, int points, int rank)
        {
            Location = location;
            Points = points;
            Rank = rank;
        }

        public BirdShow UpdateBirdShow(string location, int points, int rank)
        {
            Location = location;
            Points = points;
            Rank = rank;

            return this;
        }

        public BirdShow BelongsToBird(Bird bird)
        {
            Bird = bird;
            BirdId = bird.Id;

            return this;
        }
    }
}
