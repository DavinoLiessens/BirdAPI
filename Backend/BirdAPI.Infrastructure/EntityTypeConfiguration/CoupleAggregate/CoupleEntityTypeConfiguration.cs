using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.CoupleAggregate
{
    public class CoupleEntityTypeConfiguration : IEntityTypeConfiguration<Couple>
    {
        public void Configure(EntityTypeBuilder<Couple> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(o => o.Id).ValueGeneratedOnAdd();

            builder.Ignore(o => o.DomainEvents);

            builder.HasOne(c => c.Father)
                .WithMany()
                .HasForeignKey(c => c.FatherId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);


			builder.HasOne(c => c.Mother)
                .WithMany()
                .HasForeignKey(c => c.MotherId)
                .IsRequired()
				.OnDelete(DeleteBehavior.NoAction);

			builder.HasMany(o => o.BirdEggs).WithOne().HasForeignKey(e => e.CoupleId).OnDelete(DeleteBehavior.Restrict);
            builder.HasIndex(c => new { c.KwekerijId, c.Year, c.Round });
            builder.HasOne<Domain.AggregatesModel.KwekerijAggregate.Kwekerij>().WithMany().HasForeignKey(c => c.KwekerijId).OnDelete(DeleteBehavior.Restrict);
        }
    }
}
