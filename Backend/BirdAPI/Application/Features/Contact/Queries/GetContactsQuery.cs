using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Contact.Queries
{
    public class GetContactsQuery : IRequest<BaseResponse<PagedResponse<ContactResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }
        public string? SearchValue { get; set; }

        public GetContactsQuery(int? page, int? pageSize, string? searchValue)
        {
            Page = page;
            PageSize = pageSize;
            SearchValue = searchValue;
        }
    }
}
