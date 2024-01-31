using AutoMapper;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using System.Data.Entity;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdShowQueryHandler : IRequestHandler<GetBirdShowQuery, BaseResponse<BirdShowResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;

        public GetBirdShowQueryHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<BaseResponse<BirdShowResponseModel>> Handle(GetBirdShowQuery request, CancellationToken cancellationToken)
        {
            var birdShow = _context.BirdShows.Include(bs => bs.Bird).FirstOrDefault(bs => bs.BirdId == request.BirdId && bs.Id == request.Id);

            if (birdShow == null)
            {
                return new BaseResponse<BirdShowResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Birdshow with id '{request.Id}' does not exist");
            }

            var result = _mapper.Map<BirdShowResponseModel>(birdShow);

            return new BaseResponse<BirdShowResponseModel>(result);
        }
    }
}
