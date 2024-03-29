﻿using BirdAPI.Domain.AggregatesModel.BirdAggregate;
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
        public int BreederId { get; set; }
        public virtual Breeder Breeder { get; set; }
        public int BirdId { get; set; }
        public virtual Bird Bird { get; set; }

        public BreederBird()
        {

        }

        public BreederBird(Breeder breeder, Bird bird) : this()
        {
            Breeder = breeder;
            Bird = bird;
        }
    }
}
