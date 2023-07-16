using AutoMapper;
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
        private readonly IMapper _mapper;

        public UpdateCoupleCommandHandler(BirdAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<BaseResponse<CoupleResponseModel>> Handle(UpdateCoupleCommand request, CancellationToken cancellationToken)
        {
            var existingCouple = await _context.Couples
                                                    .Include(c => c.BirdEggs)
                                                    .FirstOrDefaultAsync(c => c.Id == request.Model.CoupleId);
            if (existingCouple == null)
            {
                return new BaseResponse<CoupleResponseModel>(false, HttpStatusCode.BadRequest)
                    .AddError($"No couple found with id {request.Model.CoupleId}");
            }

            existingCouple.UpdateCouple(request.Model.Description);

            var result = _mapper.Map<Domain.AggregatesModel.CoupleAggregate.Couple, CoupleResponseModel>(existingCouple);
            await _context.SaveChangesAsync();

            return new BaseResponse<CoupleResponseModel>(result);
        }
    }
}
