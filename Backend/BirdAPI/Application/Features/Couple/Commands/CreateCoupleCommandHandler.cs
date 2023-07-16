using AutoMapper;
using BirdAPI.Application.Features.Couple.Queries;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class CreateCoupleCommandHandler : IRequestHandler<CreateCoupleCommand, BaseResponse<CreatedCoupleResponseModel>>
    {
        private readonly BirdAPIContext _context;
        private readonly IMapper _mapper;
        private readonly IMediator _mediator;

        public CreateCoupleCommandHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<CreatedCoupleResponseModel>> Handle(CreateCoupleCommand request, CancellationToken cancellationToken)
        {
            // Validation
            if (String.IsNullOrEmpty(request.Model.Name))
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Couple name is required!");
            }

            var father = await _context.Birds.FirstOrDefaultAsync(b => b.Id == request.Model.FatherId);

            if (father == null)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No bird found with id {request.Model.FatherId}");
            }

            var mother = await _context.Birds.FirstOrDefaultAsync(b => b.Id == request.Model.MotherId);

            if (mother == null)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No bird found with id {request.Model.MotherId}");
            }

            // Execute
            var newCouple = new Domain.AggregatesModel.CoupleAggregate.Couple(request.Model.Name,
                                                                              father,
                                                                              mother,
                                                                              request.Model.StartedAt,
                                                                              request.Model.CageNumber,
                                                                              request.Model.Description);


            await _context.Couples.AddAsync(newCouple);
            await _context.SaveChangesAsync();

            var result = _mapper.Map<Domain.AggregatesModel.CoupleAggregate.Couple, CreatedCoupleResponseModel>(newCouple);
            result.Id = newCouple.Id;

            return new BaseResponse<CreatedCoupleResponseModel>(result);

        }
    }
}
