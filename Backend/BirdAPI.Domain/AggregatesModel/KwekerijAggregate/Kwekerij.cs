using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.KwekerijAggregate
{
    /// <summary>
    /// A breeding facility. Each user account has exactly one kwekerij and only sees its data.
    /// </summary>
    public class Kwekerij : Entity, IAggregateRoot
    {
        public string Name { get; private set; }

        /// <summary>The account that owns this kwekerij (null until it is claimed).</summary>
        public string? UserId { get; private set; }

        /// <summary>
        /// For a kwekerij created from existing data: the account that registers with this
        /// email address gets this kwekerij instead of a new, empty one.
        /// </summary>
        public string? ClaimEmail { get; private set; }

        protected Kwekerij() { }

        public Kwekerij(string name, string? userId = null, string? claimEmail = null)
        {
            Name = name;
            UserId = userId;
            ClaimEmail = claimEmail;
        }

        public void ClaimBy(string userId)
        {
            if (UserId != null && UserId != userId)
                throw new InvalidOperationException("This kwekerij already belongs to another account.");
            UserId = userId;
            ClaimEmail = null;
        }
    }
}
