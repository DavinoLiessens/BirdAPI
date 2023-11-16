namespace BirdAPI.Application.Features.Couple.ResponseModels
{
    public class BirdEggResponseModel
    {
        public int? Id { get; set; }
        public DateTime LayedOn { get; set; }
        public DateTime? CameOutOn { get; set; }
        public string? RingNumber { get; set; }
        public DateTime? FlyOutOn { get; set; }
        public int CoupleId { get; set; }
        public string? Gender { get; set; }
        public string? Color { get; set; }
    }
}
