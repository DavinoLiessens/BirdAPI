namespace BirdAPI.BaseModels
{
    public abstract class PagedResponseBase
    {
        public PagedResponseBase(int totalAmount, int currentPage, int pageSize)
        {
            Pagination = new Pagination(totalAmount, currentPage, pageSize);
        }

        public Pagination Pagination { get; private set; }
    }

    public class PagedResponse<T> : PagedResponseBase where T : notnull
    {
        public List<T> Results { get; private set; }

        public PagedResponse(List<T> results, int currentPage, int pageSize, int totalAmount) : base(totalAmount, currentPage, pageSize)
        {
            Results = results;
        }
    }

    public class Pagination
    {
        public int CurrentPage { get; private set; }

        public int AmountOfPages { get; private set; }

        public int PageSize { get; private set; }

        public int TotalAmount { get; private set; }

        public int FirstRowOnPage
        {
            get { return (CurrentPage - 1) * PageSize + 1; }
        }

        public int LastRowOnPage
        {
            get { return Math.Min(CurrentPage * PageSize, TotalAmount); }
        }

        public Pagination(int totalAmount, int currentPage, int pageSize)
        {
            TotalAmount = totalAmount;
            CurrentPage = currentPage;
            PageSize = pageSize;
            AmountOfPages = totalAmount == 0 ? 0 : (int)Math.Ceiling((decimal)totalAmount / pageSize);
        }
    }
}
