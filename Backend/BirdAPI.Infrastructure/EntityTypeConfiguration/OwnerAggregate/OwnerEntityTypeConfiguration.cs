using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.OwnerAggregate
{
    public class OwnerEntityTypeConfiguration : IEntityTypeConfiguration<Owner>
    {
        public void Configure(EntityTypeBuilder<Owner> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.HasMany(o => o.Birds)
                .WithOne(b => b.Owner)
                .HasForeignKey(b => b.OwnerId);

            builder.Ignore(o => o.DomainEvents);
        }
    }
}
