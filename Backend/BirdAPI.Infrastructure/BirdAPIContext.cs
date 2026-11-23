using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using BirdAPI.Domain.AggregatesModel.UserAggregate;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
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
    public class BirdAPIContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Bird> Birds { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Breeder> Breeders { get; set; }
        public DbSet<OwnerBird> OwnerBird { get; set; }
        public DbSet<BreederBird> BreederBird { get; set; }
        public DbSet<BirdEgg> BirdEggs { get; set; }
        public DbSet<Couple> Couples { get; set; }
        public DbSet<CoupleBird> BirdCouples { get; set; }
        public DbSet<BirdShow> BirdShows { get; set; }

        public BirdAPIContext()
        {

        }

        public BirdAPIContext(DbContextOptions<BirdAPIContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder); // Required for Identity tables
            
            builder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(typeof(BirdAPIContext)));
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            AddAuditInfo();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        // All SaveChangesAsync overloads end up here, so audit info is always applied
        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            AddAuditInfo();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
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
