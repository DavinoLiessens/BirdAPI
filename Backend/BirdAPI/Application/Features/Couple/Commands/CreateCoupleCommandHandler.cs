using BirdAPI.Application.Mapping;
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
        private readonly IMediator _mediator;

        public CreateCoupleCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<CreatedCoupleResponseModel>> Handle(CreateCoupleCommand request, CancellationToken cancellationToken)
        {
            // Validation
            if (String.IsNullOrEmpty(request.Model.Name))
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Couple name is required!");
            }

            if(_context.Couples.Any(c => c.Name == request.Model.Name))
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Couple name already exist!");
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

            if (father.Id == mother.Id)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError("Validation Error: Father and mother must be different birds!");
            }

            if (father.Gender != "MALE")
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Father '{father.RingNumber}' is not a male!");
            }

            if (mother.Gender != "FEMALE")
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Mother '{mother.RingNumber}' is not a female!");
            }

            if (father.IsDead == true || mother.IsDead == true)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError("Validation Error: A dead bird cannot be part of a new couple!");
            }

            if (request.Model.Round is < 1 or > 2)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError("Validation Error: The breeding round must be 1 or 2!");
            }

            var year = request.Model.Year ?? request.Model.StartedAt.Year;

            // A bird can only be in one couple per breeding round
            var busyBird = await _context.Couples
                .Where(c => c.Year == year && c.Round == request.Model.Round && c.EndedAt == null &&
                            (c.FatherId == father.Id || c.MotherId == father.Id || c.FatherId == mother.Id || c.MotherId == mother.Id))
                .Select(c => c.Name)
                .FirstOrDefaultAsync(cancellationToken);
            if (busyBird != null)
            {
                return new BaseResponse<CreatedCoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: One of these birds is already in couple '{busyBird}' in {year} round {request.Model.Round}!");
            }

            // Execute
            var newCouple = new Domain.AggregatesModel.CoupleAggregate.Couple(request.Model.Name,
                                                                              father,
                                                                              mother,
                                                                              request.Model.StartedAt,
                                                                              request.Model.CageNumber,
                                                                              request.Model.Description,
                                                                              year,
                                                                              request.Model.Round);

            // add father and mother
            father.BelongsToCouple(newCouple);
            mother.BelongsToCouple(newCouple);

            await _context.Couples.AddAsync(newCouple);
            await _context.SaveChangesAsync();

            var result = newCouple.ToCreatedResponse();
            result.Id = newCouple.Id;

            return new BaseResponse<CreatedCoupleResponseModel>(result);

        }
    }
}
