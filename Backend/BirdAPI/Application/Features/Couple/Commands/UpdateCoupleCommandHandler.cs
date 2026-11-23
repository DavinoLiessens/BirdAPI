using BirdAPI.Application.Mapping;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace BirdAPI.Application.Features.Couple.Commands
{
    public class UpdateCoupleCommandHandler : IRequestHandler<UpdateCoupleCommand, BaseResponse<CoupleResponseModel>>
    {
        private readonly BirdAPIContext _context;

        public UpdateCoupleCommandHandler(BirdAPIContext context)
        {
            _context = context;
        }

        public async Task<BaseResponse<CoupleResponseModel>> Handle(UpdateCoupleCommand request, CancellationToken cancellationToken)
        {
            var existingCouple = await _context.Couples
                                                    .Include(c => c.BirdEggs)
                                                    .FirstOrDefaultAsync(c => c.Id == request.Model.CoupleId);
            if (existingCouple == null)
            {
                return new BaseResponse<CoupleResponseModel>(false, HttpStatusCode.NotFound)
                    .AddError($"No couple found with id {request.Model.CoupleId}");
            }

            existingCouple.UpdateCouple(request.Model.Description);

            var result = existingCouple.ToResponse();
            await _context.SaveChangesAsync();

            return new BaseResponse<CoupleResponseModel>(result);
        }
    }
}
