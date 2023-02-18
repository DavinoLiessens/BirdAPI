using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.BreederEntityTypeConfiguration
{
    public class BreederEntityTypeConfiguration : IEntityTypeConfiguration<Breeder>
    {
        public void Configure(EntityTypeBuilder<Breeder> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.Ignore(o => o.DomainEvents);
        }
    }
}
