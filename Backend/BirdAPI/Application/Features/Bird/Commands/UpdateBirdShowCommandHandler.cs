using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
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
            var birdShow = await _context.BirdShows.FirstOrDefaultAsync(bs => bs.BirdId == request.Model.BirdId && bs.Id == request.Id, cancellationToken);

            if (birdShow == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.NotFound)
                    .AddError($"Birdshow with id '{request.Id}' does not exist");
            }

            birdShow.UpdateBirdShow(request.Model.Location, request.Model.Points, request.Model.Rank);

            await _context.SaveChangesAsync();

            return new BaseResponse<object>();
        }
    }
}
