using AutoMapper;
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
        private readonly IMapper _mapper;

        public GetBirdsQueryHandler(
             BirdAPIContext context,
             IMapper mapper
            )
        {
            _context = context;
            _mapper = mapper;
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

            if (!string.IsNullOrWhiteSpace(request.Year) && request.Year != "ALL")
            {
                birds = birds.Where(b => b.BirthDate.Year == int.Parse(request.Year));
            }

            // get paged result
            var pagedResult = await birds.GetPaged<Domain.AggregatesModel.BirdAggregate.Bird, BirdResponseModel>(request.Page, request.PageSize, _mapper);

            return new BaseResponse<PagedResponse<BirdResponseModel>>(pagedResult);
        }
    }
}
