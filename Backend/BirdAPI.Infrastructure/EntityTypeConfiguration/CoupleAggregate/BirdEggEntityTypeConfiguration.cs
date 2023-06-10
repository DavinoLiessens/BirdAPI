using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.CoupleAggregate
{
    public class BirdEggEntityTypeConfiguration
    {
        public void Configure(EntityTypeBuilder<BirdEgg> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.Ignore(o => o.DomainEvents);
        }
    }
}
