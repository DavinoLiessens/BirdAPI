namespace BirdAPI.Application.Features.Couple.ResponseModels
{
    public class CreatedCoupleResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartedAt { get; set; }
        public int CageNumber { get; set; }
        public string MotherRingNumber { get; set; }
        public string FatherRingNumber { get; set; }
        public string Description { get; set; }
    }
}
