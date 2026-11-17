using Microsoft.AspNetCore.Identity;
using System;

namespace BirdAPI.Domain.AggregatesModel.UserAggregate
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? LastLoginAt { get; set; }
        public bool IsActive { get; set; }

        public ApplicationUser()
        {
            CreatedAt = DateTime.UtcNow;
            IsActive = true;
        }

        public string GetFullName()
        {
            return $"{FirstName} {LastName}".Trim();
        }
    }
}
