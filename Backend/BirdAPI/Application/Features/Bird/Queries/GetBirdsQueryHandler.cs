using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.Enums;
using BirdAPI.Extensions;
using BirdAPI.Helpers;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdsQueryHandler : IRequestHandler<GetBirdsQuery, BaseResponse<PagedResponse<BirdResponseModel>>>
    {
        private readonly BirdAPIContext _context;

        public GetBirdsQueryHandler(
             BirdAPIContext context
            )
        {
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<BirdResponseModel>>> Handle(GetBirdsQuery request, CancellationToken cancellationToken)
        {
            // get all birds from db
            var birds = _context.Birds
                                    .Include(b => b.Owner)
                                    .Include(b => b.Breeder)
                                    .AsNoTracking();

            if (!string.IsNullOrWhiteSpace(request.SearchValue))
            {
                birds = birds.Where(b => b.CageNumber.Contains(request.SearchValue) ||
                                         b.RingNumber.Contains(request.SearchValue) ||
                                         b.Breeder.FirstName.StartsWith(request.SearchValue) ||
                                         b.Breeder.LastName.StartsWith(request.SearchValue) ||
                                         b.Owner.FirstName.StartsWith(request.SearchValue) ||
                                         b.Owner.LastName.StartsWith(request.SearchValue));
            }

            if (!string.IsNullOrWhiteSpace(request.Gender) && request.Gender != "ALL")
            {
                birds = birds.Where(b => b.Gender == request.Gender);
            }

            var result = BirdChecker.CheckBirdType(request.TypeOfBird!);
            if (!string.IsNullOrWhiteSpace(request.TypeOfBird) && result.IsNotAll)
            {
                birds = birds.Where(b => b.BirdType == result.BirdType);                
            }

            if (!string.IsNullOrWhiteSpace(request.Year) && request.Year != "ALL" && int.TryParse(request.Year, out var year))
            {
                birds = birds.Where(b => b.BirthDate.Year == year);
            }

            // Paging without a fixed order returns rows in an undefined order
            birds = birds.OrderBy(b => b.Id);

            // get paged result
            var pagedResult = await birds.GetPaged(request.Page, request.PageSize, x => x.ToResponse());

            return new BaseResponse<PagedResponse<BirdResponseModel>>(pagedResult);
        }
    }
}
