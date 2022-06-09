using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.OwnerAggregate
{
    public class OwnerBird : EntityLong
    {
        public long OwnerId { get; set; }
        public virtual Owner Owner { get; set; }
        public long BirdId { get; set; }
        public virtual Bird Bird { get; set; }
    }
}
