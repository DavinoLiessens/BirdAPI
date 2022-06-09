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
    }
}
