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

        public Breeder() : base()
        {
        }

        public Breeder(string firstName, string lastName, string email, string phoneNumber) : this()
        {
            FirstName = firstName;
            LastName = lastName;
            Email = email;
            PhoneNumber = phoneNumber;
        }

        public Breeder UpdateBreeder(string firstName, string lastName, string phoneNumber, string email)
        {
            FirstName = firstName;
            LastName = lastName;
            PhoneNumber = phoneNumber;
            Email = email;

            return this;
        }
    }
}
