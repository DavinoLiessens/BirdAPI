using BirdAPI.Domain.AggregatesModel.ContactAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.Enums;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.BirdAggregate
{
    public class Bird : Entity, ITenantEntity
    {
        public int KwekerijId { get; private set; }

        /// <summary>The ring number as entered. Unique per kwekerij (compared via <see cref="NormalizedRingNumber"/>).</summary>
        public string RingNumber { get; private set; }
        public string NormalizedRingNumber { get; private set; }

        public string Gender { get; set; }
        public BirdType BirdType { get; set; }
        public DateTime BirthDate { get; set; }
        public string Color { get; set; }

        /// <summary>Where the bird is housed now (a couple keeps its own cage number per season).</summary>
        public string CageNumber { get; set; }

        public virtual Contact Breeder { get; set; }
        public int BreederId { get; set; }
        public virtual Contact Owner { get; set; }
        public int OwnerId { get; set; }

        public readonly List<CoupleBird> _birdCouples;
        public virtual IReadOnlyCollection<CoupleBird> BirdCouples => _birdCouples;
        public readonly List<BirdShow> _birdShows;
        public virtual IReadOnlyCollection<BirdShow> BirdShows => _birdShows;
        public string? Description { get; set; }
        public bool? IsDead { get; set; }

        protected Bird()
        {
            _birdCouples = new List<CoupleBird>();
            _birdShows = new List<BirdShow>();
        }

        public Bird(string ringNumber, string gender, BirdType birdType, DateTime birthDate, string color, string cageNumber, string? description = null, bool isDead = false) : this()
        {
            SetRingNumber(ringNumber);
            Gender = gender;
            BirdType = birdType;
            BirthDate = birthDate;
            Color = color;
            CageNumber = cageNumber;
            Description = description;
            IsDead = isDead;
        }

        public void AssignToKwekerij(int kwekerijId) => KwekerijId = kwekerijId;

        public Bird BelongsToOwner(Contact owner)
        {
            Owner = owner;
            OwnerId = owner.Id;
            return this;
        }

        public Bird BelongsToBreeder(Contact breeder)
        {
            Breeder = breeder;
            BreederId = breeder.Id;
            return this;
        }

        public Bird BelongsToCouple(Couple couple)
        {
            var birdCouple = new CoupleBird(couple, this);
            _birdCouples.Add(birdCouple);
            return this;
        }

        public Bird UpdateBird(string ringNumber, string cageNumber, string description, bool dead)
        {
            SetRingNumber(ringNumber);
            CageNumber = cageNumber;
            Description = description;
            IsDead = dead;
            return this;
        }

        public Bird AddBirdShow(BirdShow birdShow)
        {
            _birdShows.Add(birdShow);
            return this;
        }

        private void SetRingNumber(string ringNumber)
        {
            RingNumber = ringNumber.Trim();
            NormalizedRingNumber = Wwsv.Domain.SeedWork.RingNumber.Normalize(ringNumber);
        }
    }
}
