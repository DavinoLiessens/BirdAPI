using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class CreateBirdShowCommandHandler : IRequestHandler<CreateBirdShowCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;

        public CreateBirdShowCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }
        public async Task<BaseResponse<object>> Handle(CreateBirdShowCommand request, CancellationToken cancellationToken)
        {
            var bird = await _context.Birds.FirstOrDefaultAsync(b => b.Id == request.Model.BirdId, cancellationToken);

            if (bird == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.NotFound)
                    .AddError($"Bird with id '{request.Model.BirdId}' does not exist");
            }

            var newBirdShow = new BirdShow(request.Model.Location, request.Model.Points, request.Model.Rank);
            newBirdShow.BelongsToBird(bird.Id);

            _context.BirdShows.Add(newBirdShow);
            await _context.SaveChangesAsync();

            return new BaseResponse<object>();
        }
    }
}
