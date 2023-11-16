using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class CreateCoupleBirdEggCommandHandler : IRequestHandler<CreateCoupleBirdEggCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;

        public CreateCoupleBirdEggCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<object>> Handle(CreateCoupleBirdEggCommand request, CancellationToken cancellationToken)
        {
            var existingCouple = await _context.Couples
                                                    .Include(c => c.BirdEggs)
                                                    .FirstOrDefaultAsync(c => c.Id == request.Model.CoupleId);
            if (existingCouple == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"No couple found with id {request.Model.CoupleId}");
            }

            var birdEggs = new List<BirdEgg>();

            var newEgg = new BirdEgg(existingCouple.Id, request.Model.LayedOn, request.Model.CameOutOn ?? null, request.Model.FlyOutOn ?? null, request.Model.RingNumber ?? null, request.Model.Gender ?? null, request.Model.Color ?? null);
            birdEggs.Add(newEgg);

            existingCouple.AddBirdEggs(birdEggs);

            await _context.SaveChangesAsync();

            return new BaseResponse<object>();

        }
    }
}
