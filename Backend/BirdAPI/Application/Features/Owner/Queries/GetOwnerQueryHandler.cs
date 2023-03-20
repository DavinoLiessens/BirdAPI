using AutoMapper;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Owner.Queries
{
    public class GetOwnerQueryHandler : IRequestHandler<GetOwnerQuery, BaseResponse<OwnerResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public GetOwnerQueryHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator)
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<OwnerResponseModel>> Handle(GetOwnerQuery request, CancellationToken cancellationToken)
        {
            // get owner from request
            var existingOwner = await _context.Owners.FirstOrDefaultAsync(b => b.Id == request.OwnerId);

            if (existingOwner == null)
            {
                return new BaseResponse<OwnerResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Owner with id '{request.OwnerId}' does not exist");
            }

            var result = _mapper.Map<OwnerResponseModel>(existingOwner);

            return new BaseResponse<OwnerResponseModel>(result);
        }
    }
}
