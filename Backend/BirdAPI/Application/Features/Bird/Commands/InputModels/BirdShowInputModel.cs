namespace BirdAPI.Application.Features.Bird.Commands.InputModels
{
    public class BirdShowInputModel
    {
        public int BirdId { get; set; }
        public int Points { get; set; }
        public int Rank { get; set; }
        public string Location { get; set; }
    }
}
