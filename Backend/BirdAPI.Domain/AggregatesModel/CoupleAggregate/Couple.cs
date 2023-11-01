using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class Couple : Entity
    {
        public string Name { get; private set; }
        public DateTime StartedAt { get; set; }
        public Bird Father { get; private set; }
        public int FatherId { get; set; }
        public Bird Mother { get; private set; }
        public int MotherId { get; set; }

        public string Description { get; private set; }
        public string CageNumber { get; set; }

        public readonly List<BirdEgg> _birdEggs;
        public virtual IReadOnlyCollection<BirdEgg> BirdEggs => _birdEggs;

        public readonly List<CoupleBird> _birdCouples;
        public virtual IReadOnlyCollection<CoupleBird> BirdCouples => _birdCouples;

        protected Couple() : base()
        {
            _birdEggs = new List<BirdEgg>();
            _birdCouples = new List<CoupleBird>();
        }

        public Couple(string name, Bird father, Bird mother, DateTime startedAt, string cageNumber, string description) : this()
        {
            Name = name;
            Father = father;
            Mother = mother;
            CageNumber = cageNumber;
            StartedAt = startedAt;
            Description = description;
        }

        public void AddBirdEggs(List<BirdEgg> birdEggs)
        {
            _birdEggs.AddRange(birdEggs);
        }

        public Couple UpdateCouple(string description)
        {
            Description = description;            

            return this;
        }
    }
}
