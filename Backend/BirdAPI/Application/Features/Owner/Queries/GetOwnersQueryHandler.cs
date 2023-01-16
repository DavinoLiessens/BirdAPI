using AutoMapper;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Owner.Queries
{
    public class GetOwnersQueryHandler : IRequestHandler<GetOwnersQuery, BaseResponse<PagedResponse<OwnerResponseModel>>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;

        public GetOwnersQueryHandler(
            BirdAPIContext context,
             IMapper mapper
            )
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<PagedResponse<OwnerResponseModel>>> Handle(GetOwnersQuery request, CancellationToken cancellationToken)
        {
            var owners = _context.Owners.AsNoTracking();

            var result = await owners.GetPaged<Domain.AggregatesModel.OwnerAggregate.Owner, OwnerResponseModel>(request.Page, request.PageSize, _mapper);

            return new BaseResponse<PagedResponse<OwnerResponseModel>>(result);

        }
    }
}
