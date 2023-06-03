using AutoMapper;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Owner.Commands
{
    public class UpdateOwnerCommandHandler : IRequestHandler<UpdateOwnerCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UpdateOwnerCommandHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator
            )
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(UpdateOwnerCommand request, CancellationToken cancellationToken)
        {
            // get owner from request
            var existingOwner = await _context.Owners.FirstOrDefaultAsync(o => o.Id == request.Id);

            if (existingOwner == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Owner with id '{request.Id}' does not exist");
            }

            if (await _context.Owners.AnyAsync(b => b.Email == request.Model.Email && b.Id != request.Id))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Owner with email '{request.Model.Email}' already exist");
            }

            // execution
            existingOwner.UpdateOwner(request.Model.FirstName,
                                          request.Model.LastName,
                                          request.Model.PhoneNumber,
                                          request.Model.Email);

            await _context.SaveChangesAsync();

            return new BaseResponse<object>("Ok");
        }
    }
}
