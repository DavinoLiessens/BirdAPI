using AutoMapper;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Extensions;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Application.Features.Breeder.Queries
{
    public class GetBreedersQueryHandler : IRequestHandler<GetBreedersQuery, BaseResponse<PagedResponse<BreederResponseModel>>>
    {
        private readonly IMapper _mapper;
        private readonly BirdAPIContext _context;

        public GetBreedersQueryHandler(
            IMapper mapper,
            BirdAPIContext context
            )
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<BaseResponse<PagedResponse<BreederResponseModel>>> Handle(GetBreedersQuery request, CancellationToken cancellationToken)
        {
            // get all breeders from db
            var breeders = _context.Breeders.AsNoTracking();

            var result = await breeders.GetPaged<Domain.AggregatesModel.BreederAggregate.Breeder, BreederResponseModel>(request.Page, request.PageSize, _mapper);
            
            return new BaseResponse<PagedResponse<BreederResponseModel>>(result);
        }
    }
}
