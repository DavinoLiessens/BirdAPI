using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.CoupleAggregate
{
    public class BirdCouplesEntityTypeConfiguration
    {
        public void Configure(EntityTypeBuilder<CoupleBird> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.HasKey(bc => new { bc.BirdId, bc.CoupleId });

            builder.HasOne(bc => bc.Bird)
                .WithMany(b => b.BirdCouples)
                .HasForeignKey(bc => bc.BirdId);

            builder.HasOne(bc => bc.Couple)
                .WithMany(c => c.BirdCouples)
                .HasForeignKey(bc => bc.CoupleId);

            builder.Ignore(o => o.DomainEvents);
        }
    }
}
