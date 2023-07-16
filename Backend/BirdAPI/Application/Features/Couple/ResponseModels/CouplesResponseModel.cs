namespace BirdAPI.Application.Features.Couple.ResponseModels
{
    public class CouplesResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CageNumber { get; set; }
        public DateTime StartedAt { get; set; }
        public string MotherRingNumber { get; set; }
        public string FatherRingNumber { get; set; }
    }
}
