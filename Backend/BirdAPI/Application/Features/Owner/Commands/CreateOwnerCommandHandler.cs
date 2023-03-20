using AutoMapper;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Owner.Commands
{
    public class CreateOwnerCommandHandler : IRequestHandler<CreateOwnerCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CreateOwnerCommandHandler(
             BirdAPIContext context,
            IMapper mapper,
            IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(CreateOwnerCommand request, CancellationToken cancellationToken)
        {
            // Validation
            if (await _context.Owners.AnyAsync(o => o.Email == request.Model.Email))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Owner with email '{request.Model.Email}' already exist");
            }

            if (String.IsNullOrEmpty(request.Model.FirstName))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Firstname is required!");
            }

            if (String.IsNullOrEmpty(request.Model.LastName))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Lastname is required!");
            }

            if (String.IsNullOrEmpty(request.Model.PhoneNumber))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Phonenumber is required!");
            }

            // Execution
            var newOwner = new Domain.AggregatesModel.OwnerAggregate.Owner(request.Model.FirstName,
                                                                           request.Model.LastName,
                                                                           request.Model.Email,
                                                                           request.Model.PhoneNumber);

            await _context.Owners.AddAsync(newOwner);
            await _context.SaveChangesAsync();

            return new BaseResponse<object>(true, HttpStatusCode.OK);
        }
    }
}
