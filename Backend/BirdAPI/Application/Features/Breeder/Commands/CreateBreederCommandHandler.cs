using AutoMapper;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System;

namespace BirdAPI.Application.Features.Breeder.Commands
{
    public class CreateBreederCommandHandler : IRequestHandler<CreateBreederCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CreateBreederCommandHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(CreateBreederCommand request, CancellationToken cancellationToken)
        {
            // Validation
            if (await _context.Breeders.AnyAsync(b => b.Email == request.Model.Email)) {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Breeder with email '{request.Model.Email}' already exist");
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
            var newBreeder = new Domain.AggregatesModel.BreederAggregate.Breeder(request.Model.FirstName,
                                                                                 request.Model.LastName,
                                                                                 request.Model.Email,
                                                                                 request.Model.PhoneNumber);

            await _context.Breeders.AddAsync(newBreeder);
            await _context.SaveChangesAsync();

            return new BaseResponse<object>(true, HttpStatusCode.OK);
        }
    }
}
