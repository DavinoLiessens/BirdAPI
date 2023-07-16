using BirdAPI.Domain.AggregatesModel.CoupleAggregate;

namespace BirdAPI.Application.Features.Couple.Commands.InputModels
{
    public class UpdateCoupleInputModel
    {
        public int CoupleId { get; set; }
        public string Description { get; set; }
    }
}
