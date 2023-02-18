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
    public class BirdEntityTypeConfiguration : IEntityTypeConfiguration<Bird>
    {
        public void Configure(EntityTypeBuilder<Bird> builder)
        {
            builder.HasKey(b => b.Id);
            builder.Property(b => b.Id).ValueGeneratedOnAdd();

            builder.HasOne(b => b.Owner)
                .WithMany()
                .HasForeignKey(b => b.OwnerId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(b => b.Breeder)
                .WithMany()
                .HasForeignKey(b => b.BreederId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

            builder.Ignore(b => b.DomainEvents);
        }
    }
}
