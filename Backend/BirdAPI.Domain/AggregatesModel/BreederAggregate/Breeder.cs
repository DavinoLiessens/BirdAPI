using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.BreederAggregate
{
    public class Breeder : Entity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public readonly List<Bird> _birds;
        public IReadOnlyCollection<Bird> Birds => _birds;

        public Breeder() : base()
        {
            _birds = new List<Bird>();
        }

        public Breeder(string firstName, string lastName, string email, string phoneNumber) : this()
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            PhoneNumber = phoneNumber;
        }

        public void AddBirds(List<Bird> birds)
        {
            _birds.AddRange(birds);
        }
    }
}
