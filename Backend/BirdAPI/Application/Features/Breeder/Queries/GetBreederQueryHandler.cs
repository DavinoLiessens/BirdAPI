using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Breeder.Commands;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreederQueryHandler : IRequestHandler<GetBreederQuery, BaseResponse<BreederResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMediator _mediator;

        public GetBreederQueryHandler(
            BirdAPIContext context,
            IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }

        public async Task<BaseResponse<BreederResponseModel>> Handle(GetBreederQuery request, CancellationToken cancellationToken)
        {
            // get breeder from request
            var existingBreeder = await _context.Breeders.FirstOrDefaultAsync(b => b.Id == request.BreederId);

            if (existingBreeder == null)
            {
                return new BaseResponse<BreederResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"Breeder with id '{request.BreederId}' does not exist");
            }

            var result = existingBreeder.ToResponse();

            return new BaseResponse<BreederResponseModel>(result);
        }
    }
}
