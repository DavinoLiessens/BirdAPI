using AutoMapper;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
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

            if (!string.IsNullOrWhiteSpace(request.SearchValue))
            {
                owners = owners.Where(o => o.FirstName.StartsWith(request.SearchValue) ||
                                           o.LastName.StartsWith(request.SearchValue));
            }

            var result = await owners.GetPaged<Domain.AggregatesModel.OwnerAggregate.Owner, OwnerResponseModel>(request.Page, request.PageSize, _mapper);

            return new BaseResponse<PagedResponse<OwnerResponseModel>>(result);

        }
    }
}
