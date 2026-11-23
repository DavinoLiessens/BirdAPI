using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreedersQueryHandler : IRequestHandler<GetBreedersQuery, BaseResponse<PagedResponse<BreederResponseModel>>>
    {
        private readonly BirdAPIContext _context;

        public GetBreedersQueryHandler(
            BirdAPIContext context
            )
        {
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<BreederResponseModel>>> Handle(GetBreedersQuery request, CancellationToken cancellationToken)
        {
            // get all breeders from db
            var breeders = _context.Breeders.AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.SearchValue))
            {
                breeders = breeders.Where(b => b.FirstName.StartsWith(request.SearchValue) ||
                                               b.LastName.StartsWith(request.SearchValue));
            }

            var result = await breeders.OrderBy(b => b.Id).GetPaged(request.Page, request.PageSize, x => x.ToResponse());
            
            return new BaseResponse<PagedResponse<BreederResponseModel>>(result);
        }
    }
}
