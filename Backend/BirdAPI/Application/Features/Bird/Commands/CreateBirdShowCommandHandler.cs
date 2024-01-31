using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using System.Data.Entity;
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
            var bird = _context.Birds.FirstOrDefault(b => b.Id == request.Model.BirdId);

            if (bird == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Bird with id '{request.Model.BirdId}' does not exist");
            }

            var newBirdShow = new BirdShow(request.Model.Location, request.Model.Points, request.Model.Rank);
            newBirdShow.BelongsToBird(bird);

            _context.BirdShows.Add(newBirdShow);
            _context.SaveChanges();

            return new BaseResponse<object>();
        }
    }
}
