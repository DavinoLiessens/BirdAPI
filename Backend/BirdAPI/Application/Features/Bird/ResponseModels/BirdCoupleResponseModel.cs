namespace BirdAPI.Application.Features.Bird.ResponseModels
{
    public class BirdCoupleResponseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FatherRingNumber { get; set; }
        public string MotherRingNumber { get; set; }
        public DateTime StartedAt { get; set; }
    }
}
