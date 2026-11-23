using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.CoupleAggregate
{
    public class CoupleBird : EntityLong, ITenantEntity
    {
        public int KwekerijId { get; private set; }
        public void AssignToKwekerij(int kwekerijId) => KwekerijId = kwekerijId;

        public Bird Bird { get; set; }
        public int BirdId { get; set; }
        public int CoupleId { get; set; }
        public Couple Couple { get; set; }

        public CoupleBird()
        {
            
        }

        public CoupleBird(Couple couple, Bird bird) : this()
        {
            Couple = couple;
            BirdId = bird.Id;
        }
    }
}
