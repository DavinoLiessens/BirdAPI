﻿using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using BirdAPI.Domain.Enums;
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
        public string Gender { get; set; }
        public BirdType BirdType { get; set; }
        public DateTime BirthDate { get; set; }
        public string Color { get; set; }
        public int CageNumber { get; set; }
        public virtual Breeder Breeder { get; set; }
        public int BreederId { get; set; }
        public virtual Owner Owner { get; set; }
        public int OwnerId { get; set; }
        public string Description { get; set; }
        public bool? IsDead { get; set; }

        protected Bird()
        {

        }

        public Bird(string ringNumber, string gender, BirdType birdType, DateTime birthDate, string color, int cageNumber, string description, bool isDead = false)
        {
            RingNumber = ringNumber;
            Gender = gender;
            BirdType = birdType;
            BirthDate = birthDate;
            Color = color;
            CageNumber = cageNumber;
            Description = description;
            IsDead = isDead;
        }

        public Bird BelongsToOwner(Owner owner)
        {
            Owner = owner;
            OwnerId = owner.Id;

            return this;
        }

        public Bird BelongsToBreeder(Breeder breeder)
        {
            Breeder = breeder;
            BreederId = breeder.Id;

            return this;
        }

        public Bird UpdateBird(string ringNumber, int cageNumber, string description, bool dead)
        {
            RingNumber = ringNumber;
            CageNumber = cageNumber;
            Description = description;
            IsDead = dead;

            return this;
        }
    }
}
