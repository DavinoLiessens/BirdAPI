using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.OwnerAggregate
{
    public class Owner : Entity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public readonly List<Bird> _birds;
        public IReadOnlyCollection<Bird> Birds => _birds;

        public Owner() : base()
        {
            _birds = new List<Bird>();
        }

        public Owner(string firstName, string lastName, string email, string phoneNumber) : this()
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
