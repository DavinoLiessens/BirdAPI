using BirdAPI.BaseModels;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class CreateCoupleCommandHandler : IRequestHandler<CreateCoupleCommand, BaseResponse<object>>
    {
        private readonly BirdAPIContext _context;

        public CreateCoupleCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<object>> Handle(CreateCoupleCommand request, CancellationToken cancellationToken)
        {
            // Validation
            if (String.IsNullOrEmpty(request.Model.Name))
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"Validation Error: Couple name is required!");
            }

            var father = await _context.Birds.FirstOrDefaultAsync(b => b.Id == request.Model.FatherId);

            if (father == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"No bird found with id {request.Model.FatherId}");
            }

            var mother = await _context.Birds.FirstOrDefaultAsync(b => b.Id == request.Model.MotherId);

            if (mother == null)
            {
                return new BaseResponse<object>(false, HttpStatusCode.BadRequest)
                    .AddError($"No bird found with id {request.Model.MotherId}");
            }

            // Execute
            var newCouple = new Domain.AggregatesModel.CoupleAggregate.Couple(request.Model.Name,
                                                                              father,
                                                                              mother,
                                                                              request.Model.StartedAt,
                                                                              request.Model.CageNumber,
                                                                              request.Model.Description);

            // TODO: Add logic for birdEggs

            await _context.Couples.AddAsync(newCouple);
            await _context.SaveChangesAsync();

            return new BaseResponse<object>(true, HttpStatusCode.OK);

        }
    }
}
