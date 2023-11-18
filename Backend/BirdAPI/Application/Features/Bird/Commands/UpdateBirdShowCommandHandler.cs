using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using System.Data.Entity;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class UpdateBirdShowCommandHandler : IRequestHandler<UpdateBirdShowCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;

        public UpdateBirdShowCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<object>> Handle(UpdateBirdShowCommand request, CancellationToken cancellationToken)
        {
            var birdShow = _context.BirdShows.FirstOrDefault(bs => bs.BirdId == request.Model.BirdId && bs.Id == request.Id);

            if (birdShow == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Birdshow with id '{request.Id}' does not exist");
            }

            birdShow.UpdateBirdShow(request.Model.Location, request.Model.Points, request.Model.Rank);

            _context.SaveChanges();

            return new BaseResponse<object>();
        }
    }
}
