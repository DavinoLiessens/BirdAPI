using AutoMapper;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Bird.Commands
{
    public class AddBirdCommandHandler : IRequestHandler<AddBirdCommand, BaseResponse<BirdResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public AddBirdCommandHandler(
            BirdAPIContext context,
            IMapper mapper,
            IMediator mediator)
        {
            _mediator = mediator;
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<BirdResponseModel>> Handle(AddBirdCommand request, CancellationToken cancellationToken)
        {
            // create new bird
            var bird = new Domain.AggregatesModel.BirdAggregate.Bird(
                                                        request.Model.RingNumber,
                                                        request.Model.Gender,
                                                        request.Model.BirdType,
                                                        request.Model.BirthDate,
                                                        request.Model.Color,
                                                        request.Model.CageNumber,
                                                        request.Model.Description,
                                                        request.Model.Dead,
                                                        request.Model.IsChild
                                                        );

            // get breeder from db
            var breeder = await _context.Breeders.FirstOrDefaultAsync(b => b.Id == request.Model.BreederId);

            if (breeder == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"No breeder found with id '{request.Model.BreederId}'");
            }

            // get owner from db
            var owner = await _context.Owners.FirstOrDefaultAsync(o => o.Id == request.Model.OwnerId);

            if (owner == null)
            {
                return new BaseResponse<BirdResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"No owner found with id '{request.Model.OwnerId}'");
            }

            bird.BelongsToBreeder(breeder);
            bird.BelongsToOwner(owner);

            // create just the bird
            var result = _mapper.Map<BirdResponseModel>(bird);

            return new BaseResponse<BirdResponseModel>(result);
        }
    }
}
