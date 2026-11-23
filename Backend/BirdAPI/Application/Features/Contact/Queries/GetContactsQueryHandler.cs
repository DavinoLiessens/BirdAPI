using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Contact.Queries
{
    public class GetContactsQueryHandler : IRequestHandler<GetContactsQuery, BaseResponse<PagedResponse<ContactResponseModel>>>
    {
        private readonly BirdAPIContext _context;

        public GetContactsQueryHandler(
            BirdAPIContext context
            )
        {
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<ContactResponseModel>>> Handle(GetContactsQuery request, CancellationToken cancellationToken)
        {
            var contacts = _context.Contacts.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.SearchValue))
            {
                contacts = contacts.Where(o => o.FirstName.Contains(request.SearchValue) ||
                                           o.LastName.Contains(request.SearchValue));
            }

            var result = await contacts.OrderByDescending(o => o.IsSelf).ThenBy(o => o.LastName).ThenBy(o => o.FirstName).GetPaged(request.Page, request.PageSize, x => x.ToResponse());

            return new BaseResponse<PagedResponse<ContactResponseModel>>(result);

        }
    }
}
