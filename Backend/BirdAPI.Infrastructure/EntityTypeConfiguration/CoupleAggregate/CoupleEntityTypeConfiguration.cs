using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.CoupleAggregate
{
    public class CoupleEntityTypeConfiguration
    {
        public void Configure(EntityTypeBuilder<Couple> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.Ignore(o => o.DomainEvents);

            builder.HasOne(c => c.Father)
                .WithMany()
                .HasForeignKey(c => c.FatherId)
                .IsRequired();

            builder.HasOne(c => c.Mother)
                .WithMany()
                .HasForeignKey(c => c.MotherId)
                .IsRequired();

            builder.HasMany(o => o.BirdEggs);
        }
    }
}
