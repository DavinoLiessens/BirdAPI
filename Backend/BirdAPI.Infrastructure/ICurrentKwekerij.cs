namespace BirdAPI.Infrastructure
{
    /// <summary>
    /// The kwekerij whose data the current request may see. Null outside a logged-in request
    /// (e.g. login/registration, migrations, background jobs).
    /// </summary>
    public interface ICurrentKwekerij
    {
        int? KwekerijId { get; }
    }

    /// <summary>For design-time tooling and tests: a fixed (or no) kwekerij.</summary>
    public sealed class FixedKwekerij : ICurrentKwekerij
    {
        public FixedKwekerij(int? kwekerijId) => KwekerijId = kwekerijId;
        public int? KwekerijId { get; }
    }
}
