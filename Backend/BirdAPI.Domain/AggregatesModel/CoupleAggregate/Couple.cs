using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class Couple : Entity, ITenantEntity
    {
        public int KwekerijId { get; private set; }
        public void AssignToKwekerij(int kwekerijId) => KwekerijId = kwekerijId;

        public string Name { get; private set; }
        public DateTime StartedAt { get; set; }

        /// <summary>Breeding season. A kwekerij has two breeding rounds (1 and 2) per year.</summary>
        public int Year { get; private set; }
        public int Round { get; private set; }

        /// <summary>When the pair was split up again; null while the couple is still together.</summary>
        public DateTime? EndedAt { get; private set; }
        public Bird Father { get; private set; }
        public int FatherId { get; set; }
        public Bird Mother { get; private set; }
        public int MotherId { get; set; }

        public string Description { get; private set; }
        /// <summary>The cage of the couple during this season (kept for history, e.g. results per cage).</summary>
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

        public Couple(string name, Bird father, Bird mother, DateTime startedAt, string cageNumber, string description, int? year = null, int round = 1) : this()
        {
            if (round is < 1 or > 2)
                throw new ArgumentOutOfRangeException(nameof(round), "A breeding round is 1 or 2.");
            Year = year ?? startedAt.Year;
            Round = round;
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

        public Couple End(DateTime endedAt)
        {
            EndedAt = endedAt;
            return this;
        }

        public Couple UpdateCouple(string description)
        {
            Description = description;            

            return this;
        }
    }
}
