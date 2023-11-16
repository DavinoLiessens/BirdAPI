using AutoMapper;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class UpdateBirdCommandHandler : IRequestHandler<UpdateBirdCommand, BaseResponse<BirdResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public UpdateBirdCommandHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator
            )
        {
            _context = context;
            _mapper = mapper;
            _mediator = mediator;
        }

        public async Task<BaseResponse<BirdResponseModel>> Handle(UpdateBirdCommand request, CancellationToken cancellationToken)
        {
            // get breeder from request
            var existingBird = await _context.Birds
                                             .Include(b => b.Owner)
                                             .FirstOrDefaultAsync(b => b.Id == request.Id);

            if (existingBird == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Bird with id '{request.Id}' does not exist");
            }

            // if you update the ringnumber also make sure you update the birdEgg if exists
            // else you can't find the couple references anymore
            if (await _context.Birds.AnyAsync(b => b.RingNumber == request.Model.RingNumber && b.Id != request.Id))
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Bird with ringnumber '{request.Model.RingNumber}' already exist");
            }

            if (existingBird.RingNumber != request.Model.RingNumber)
            {
                var existingBirdEgg = await _context.BirdEggs.FirstOrDefaultAsync(be => be.RingNumber == existingBird.RingNumber);

                if (existingBirdEgg != null)
                {
                    existingBirdEgg.UpdateRingNumber(request.Model.RingNumber);
                }
            }

            // execution
            existingBird.UpdateBird(request.Model.RingNumber,
                                          request.Model.CageNumber,
                                          request.Model.Description,
                                          request.Model.isDead);

            if (request.Model.OwnerId != existingBird.OwnerId)
            {
                // search for owner
                var owner = await _context.Owners.FirstOrDefaultAsync(o => o.Id == request.Model.OwnerId);

                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No owner found with id '{request.Model.OwnerId}'");


                existingBird.BelongsToOwner(owner);
            }

            var result = _mapper.Map<BirdResponseModel>(existingBird);

            await _context.SaveChangesAsync();

            return new BaseResponse<BirdResponseModel>(result);
        }
    }
}
