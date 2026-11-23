using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.ContactAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.KwekerijAggregate;
using BirdAPI.Domain.AggregatesModel.UserAggregate;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Reflection;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Infrastructure
{
    public class BirdAPIContext : IdentityDbContext<ApplicationUser>
    {
        private readonly ICurrentKwekerij _currentKwekerij;

        public DbSet<Kwekerij> Kwekerijen { get; set; }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Bird> Birds { get; set; }
        public DbSet<BirdEgg> BirdEggs { get; set; }
        public DbSet<Couple> Couples { get; set; }
        public DbSet<CoupleBird> BirdCouples { get; set; }
        public DbSet<BirdShow> BirdShows { get; set; }

        public BirdAPIContext(DbContextOptions<BirdAPIContext> options, ICurrentKwekerij currentKwekerij) : base(options)
        {
            _currentKwekerij = currentKwekerij;
        }

        /// <summary>The kwekerij all queries are filtered on (see the query filters below).</summary>
        public int? CurrentKwekerijId => _currentKwekerij.KwekerijId;

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder); // Required for Identity tables

            builder.ApplyConfigurationsFromAssembly(Assembly.GetAssembly(typeof(BirdAPIContext))!);

            // Multi-tenancy: every query on tenant data only returns rows of the current kwekerij.
            // Without a kwekerij (not logged in) nothing is returned, so data can never leak.
            foreach (var entityType in builder.Model.GetEntityTypes()
                         .Where(t => typeof(ITenantEntity).IsAssignableFrom(t.ClrType)))
            {
                var method = typeof(BirdAPIContext)
                    .GetMethod(nameof(SetTenantFilter), BindingFlags.NonPublic | BindingFlags.Instance)!
                    .MakeGenericMethod(entityType.ClrType);
                method.Invoke(this, new object[] { builder });
            }
        }

        private void SetTenantFilter<T>(ModelBuilder builder) where T : class, ITenantEntity
        {
            Expression<Func<T, bool>> filter = e => CurrentKwekerijId != null && e.KwekerijId == CurrentKwekerijId;
            builder.Entity<T>().HasQueryFilter(filter);
            builder.Entity<T>().HasIndex(e => e.KwekerijId);
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            BeforeSave();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        // All SaveChangesAsync overloads end up here, so audit info is always applied
        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default)
        {
            BeforeSave();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }

        private void BeforeSave()
        {
            AssignKwekerij();
            AddAuditInfo();
        }

        /// <summary>New tenant data automatically belongs to the kwekerij of the current request.</summary>
        private void AssignKwekerij()
        {
            foreach (var entry in ChangeTracker.Entries<ITenantEntity>())
            {
                if (entry.State == EntityState.Added && entry.Entity.KwekerijId == 0)
                {
                    if (CurrentKwekerijId == null)
                        throw new InvalidOperationException($"Cannot save a new {entry.Entity.GetType().Name} without a kwekerij.");
                    entry.Entity.AssignToKwekerij(CurrentKwekerijId.Value);
                }
                else if (entry.State is EntityState.Modified or EntityState.Deleted && CurrentKwekerijId != null && entry.Entity.KwekerijId != CurrentKwekerijId)
                {
                    throw new InvalidOperationException("Data of another kwekerij cannot be changed.");
                }
            }
        }

        private void AddAuditInfo()
        {
            foreach (var entry in ChangeTracker.Entries<ITrackableEntity>())
            {
                if (entry.State == EntityState.Modified)
                {
                    entry.Entity.IsModified();
                }

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
