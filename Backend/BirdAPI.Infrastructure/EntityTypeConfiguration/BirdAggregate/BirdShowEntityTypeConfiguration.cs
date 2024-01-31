using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.BirdAggregate
{
    public class BirdShowEntityTypeConfiguration : IEntityTypeConfiguration<BirdShow>
    {
        public void Configure(EntityTypeBuilder<BirdShow> builder)
        {
            builder.HasKey(b => b.Id);
            builder.Property(b => b.Id).ValueGeneratedOnAdd();

            builder.HasOne(bs => bs.Bird)
                .WithMany()
                .HasForeignKey(bs => bs.BirdId)
                .IsRequired();

            builder.Ignore(b => b.DomainEvents);
        }
    }
}
