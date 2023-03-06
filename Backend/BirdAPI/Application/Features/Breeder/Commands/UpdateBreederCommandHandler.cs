using AutoMapper;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Breeder.Commands
{
    public class UpdateBreederCommandHandler : IRequestHandler<UpdateBreederCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UpdateBreederCommandHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<object>> Handle(UpdateBreederCommand request, CancellationToken cancellationToken)
        {
            // get breeder from request
            var existingBreeder = await _context.Breeders.FirstOrDefaultAsync(b => b.Id == request.Id);

            if (existingBreeder == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Breeder with id '{request.Id}' does not exist");
            }

            if (await _context.Breeders.AnyAsync(b => b.Email == request.Model.Email && b.Id != request.Id))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Breeder with email '{request.Model.Email}' already exist");
            }

            // execution
            existingBreeder.UpdateBreeder(request.Model.FirstName,
                                          request.Model.LastName,
                                          request.Model.PhoneNumber,
                                          request.Model.Email);

            await _context.SaveChangesAsync();

            return new BaseResponse<object>("Ok");
        }
    }
}
