namespace Wwsv.Domain.SeedWork
{
    /// <summary>
    /// Data that belongs to exactly one kwekerij. The DbContext filters every query on the
    /// kwekerij of the logged-in user and fills <see cref="KwekerijId"/> for new entities.
    /// </summary>
    public interface ITenantEntity
    {
        int KwekerijId { get; }
        void AssignToKwekerij(int kwekerijId);
    }
}
