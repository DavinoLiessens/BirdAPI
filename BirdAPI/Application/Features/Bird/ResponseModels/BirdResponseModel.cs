namespace BirdAPI.Application.Features.Bird.ResponseModels
{
    public class BirdResponseModel
    {
        public int Id { get; set; }
        public string RingNumber { get; set; }
        public string Sex { get; set; }
        public int AgeOfBirth { get; set; }
        public int CageNumber { get; set; }
        public string Color { get; set; }
        public string Creator { get; set; }
        public string Description { get; set; }
        public string KindOfBird { get; set; }
        public bool Dead { get; set; }
    }
}
