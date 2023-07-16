using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.BirdEggAggregate
{
    internal class BirdEggEntityTypeConfiguration : IEntityTypeConfiguration<BirdEgg>
    {
        public void Configure(EntityTypeBuilder<BirdEgg> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.Ignore(o => o.DomainEvents);
        }
    }
}
