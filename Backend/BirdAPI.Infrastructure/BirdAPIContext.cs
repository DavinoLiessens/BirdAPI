using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Infrastructure
{
    public class BirdAPIContext : DbContext
    {
        public DbSet<Bird> Birds { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Breeder> Breeders { get; set; }
        public DbSet<OwnerBird> OwnerBird { get; set; }
        public DbSet<BreederBird> BreederBird { get; set; }
        public DbSet<BirdEgg> BirdEggs { get; set; }
        public DbSet<Couple> Couples { get; set; }

        public BirdAPIContext()
        {

        }

        public BirdAPIContext(DbContextOptions<BirdAPIContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json",
                    optional: false,
                    reloadOnChange: true)
                .AddJsonFile($"appsettings.json",
                    true,
                    true)
                .Build();

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("");
            }
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(typeof(BirdAPIContext)));
        }

        public override int SaveChanges()
        {
            AddAuditInfo();
            return base.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            AddAuditInfo();
            return await base.SaveChangesAsync();
        }

        private void AddAuditInfo()
        {
            foreach (var entry in ChangeTracker.Entries<ITrackableEntity>())
            {
                if (entry.State == EntityState.Modified)
                {
                    entry.Entity.IsModified();
                }

                //event Users moeten softdeletable zijn
                if (entry.State == EntityState.Deleted && entry.Entity is ISoftDeletable entity)
                {
                    entry.State = EntityState.Unchanged;
                    entity.IsActive = false;
                }

                if (entry.State == EntityState.Added)
                {
                    entry.Entity.IsCreated();
                }
                else
                {
                    entry.Property(p => p.Created).IsModified = false;
                }
            }
        }
    }
}
