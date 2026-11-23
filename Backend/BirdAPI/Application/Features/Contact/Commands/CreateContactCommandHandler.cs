using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Contact.Commands
{
    public class CreateContactCommandHandler : IRequestHandler<CreateContactCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMediator _mediator;

        public CreateContactCommandHandler(
             BirdAPIContext context,
            IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(CreateContactCommand request, CancellationToken cancellationToken)
        {
            // Validation (email and phone are optional; many contacts are only known by name)
            if (string.IsNullOrWhiteSpace(request.Model.FirstName))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Firstname is required!");
            }

            if (string.IsNullOrWhiteSpace(request.Model.LastName))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Lastname is required!");
            }

            // Execution
            var newContact = new Domain.AggregatesModel.ContactAggregate.Contact(request.Model.FirstName,
                                                                           request.Model.LastName,
                                                                           request.Model.Email,
                                                                           request.Model.PhoneNumber);

            await _context.Contacts.AddAsync(newContact);
            await _context.SaveChangesAsync();

            return new BaseResponse<object>(true, HttpStatusCode.OK);
        }
    }
}
