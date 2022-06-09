namespace Wwsv.Domain.SeedWork
{
    public interface ISoftDeletable
    {
        bool IsActive { get; set; }
    }
}
