using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.BirdAggregate
{
    public class Bird : Entity
    {
        public string RingNumber { get; set; }
        public string Sex { get; set; }
        public string KindOfBird { get; set; }
        public string AgeOfBirth { get; set; }
        public string Color { get; set; }
        public int CageNumber { get; set; }
        public string Creator { get; set; }
        public Owner Owner { get; set; }
        public int OwnerId { get; set; }
        public string Description { get; set; }
        public bool Dead { get; set; }

        protected Bird()
        {

        }

        public Bird(string ringNumber, string sex, string kindOfBird, string ageOfBirth, string color, int cageNumber, string creator, string description, bool dead = false)
        {
            RingNumber = ringNumber;
            Sex = sex;
            KindOfBird = kindOfBird;
            AgeOfBirth = ageOfBirth;
            Color = color;
            CageNumber = cageNumber;
            Creator = creator;
            Description = description;
            Dead = dead;
        }

        public Bird BelongsToOwner(Owner owner)
        {
            Owner = owner;
            OwnerId = owner.Id;

            return this;
        }

        public Bird UpdateBird(int? cageNumber, string? description, bool? dead)
        {
            CageNumber = cageNumber.Value;
            Description = description;
            Dead = dead.Value;

            return this;
        }
    }
}
