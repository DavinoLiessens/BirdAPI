using BirdAPI.Domain.AggregatesModel.ContactAggregate;
using BirdAPI.Domain.AggregatesModel.KwekerijAggregate;
using BirdAPI.Domain.AggregatesModel.UserAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace BirdAPI.Infrastructure.EntityTypeConfiguration.KwekerijAggregate
{
    public class KwekerijEntityTypeConfiguration : IEntityTypeConfiguration<Kwekerij>
    {
        public void Configure(EntityTypeBuilder<Kwekerij> builder)
        {
            builder.ToTable("Kwekerijen");
            builder.HasKey(k => k.Id);
            builder.Property(k => k.Name).IsRequired().HasMaxLength(200);
            builder.Property(k => k.ClaimEmail).HasMaxLength(256);
            builder.HasOne<ApplicationUser>().WithMany().HasForeignKey(k => k.UserId).OnDelete(DeleteBehavior.Restrict);
            // One login per kwekerij
            builder.HasIndex(k => k.UserId).IsUnique().HasFilter("[UserId] IS NOT NULL");
            builder.Ignore(k => k.DomainEvents);
        }
    }

    public class ContactEntityTypeConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.ToTable("Contacts");
            builder.HasKey(c => c.Id);
            builder.Property(c => c.FirstName).IsRequired().HasMaxLength(100);
            builder.Property(c => c.LastName).IsRequired().HasMaxLength(100);
            builder.Property(c => c.Email).HasMaxLength(256);
            builder.Property(c => c.PhoneNumber).HasMaxLength(50);
            builder.HasOne<Kwekerij>().WithMany().HasForeignKey(c => c.KwekerijId).OnDelete(DeleteBehavior.Restrict);
            // At most one "self" contact per kwekerij
            builder.HasIndex(c => c.KwekerijId).IsUnique().HasFilter("[IsSelf] = 1").HasDatabaseName("IX_Contacts_KwekerijId_Self");
            builder.Ignore(c => c.FullName);
            builder.Ignore(c => c.DomainEvents);
        }
    }
}
