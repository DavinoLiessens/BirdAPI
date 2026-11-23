using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Contact.Commands
{
    public class UpdateContactCommandHandler : IRequestHandler<UpdateContactCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMediator _mediator;

        public UpdateContactCommandHandler(
            BirdAPIContext context,
            IMediator mediator
            )
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(UpdateContactCommand request, CancellationToken cancellationToken)
        {
            // get contact from request
            var existingContact = await _context.Contacts.FirstOrDefaultAsync(o => o.Id == request.Id);

            if (existingContact == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.NotFound)
                    .AddError($"Contact with id '{request.Id}' does not exist");
            }

            // execution
            if (string.IsNullOrWhiteSpace(request.Model.FirstName) || string.IsNullOrWhiteSpace(request.Model.LastName))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError("Validation Error: Firstname and lastname are required!");
            }

            existingContact.Update(request.Model.FirstName, request.Model.LastName, request.Model.Email, request.Model.PhoneNumber);

            await _context.SaveChangesAsync();

            return new BaseResponse<object>("Ok");
        }
    }
}
