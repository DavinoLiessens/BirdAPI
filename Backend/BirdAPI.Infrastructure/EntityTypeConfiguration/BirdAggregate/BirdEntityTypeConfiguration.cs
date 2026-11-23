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

            builder.HasMany(b => b.BirdShows)
                .WithOne()
                .HasForeignKey(b => b.BirdId)
                .OnDelete(DeleteBehavior.Restrict);


            builder.Property(b => b.RingNumber).IsRequired().HasMaxLength(100);
            builder.Property(b => b.NormalizedRingNumber).IsRequired().HasMaxLength(100);
            // A ring number identifies a bird: unique within a kwekerij
            builder.HasIndex(b => new { b.KwekerijId, b.NormalizedRingNumber }).IsUnique();
            builder.HasOne<Domain.AggregatesModel.KwekerijAggregate.Kwekerij>().WithMany().HasForeignKey(b => b.KwekerijId).OnDelete(DeleteBehavior.Restrict);
            builder.Ignore(b => b.DomainEvents);
        }
    }
}
