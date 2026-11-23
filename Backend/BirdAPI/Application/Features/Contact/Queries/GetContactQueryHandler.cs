using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Contact.Queries
{
    public class GetContactQueryHandler : IRequestHandler<GetContactQuery, BaseResponse<ContactResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMediator _mediator;

        public GetContactQueryHandler(
            BirdAPIContext context,
            IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<BaseResponse<ContactResponseModel>> Handle(GetContactQuery request, CancellationToken cancellationToken)
        {
            // get contact from request
            var existingContact = await _context.Contacts.FirstOrDefaultAsync(b => b.Id == request.ContactId);

            if (existingContact == null)
            {
                return new BaseResponse<ContactResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"Contact with id '{request.ContactId}' does not exist");
            }

            var result = existingContact.ToResponse();

            return new BaseResponse<ContactResponseModel>(result);
        }
    }
}
