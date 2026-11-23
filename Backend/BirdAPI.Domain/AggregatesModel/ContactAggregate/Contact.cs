using Wwsv.Domain.SeedWork;

namespace BirdAPI.Domain.AggregatesModel.ContactAggregate
{
    /// <summary>
    /// A person in the contact list of a kwekerij. A contact can be the breeder and/or
    /// the owner of birds. The kwekerij itself is the contact with <see cref="IsSelf"/>.
    /// </summary>
    public class Contact : Entity, IAggregateRoot, ITenantEntity
    {
        public int KwekerijId { get; private set; }
        public string FirstName { get; private set; }
        public string LastName { get; private set; }
        public string? Email { get; private set; }
        public string? PhoneNumber { get; private set; }

        /// <summary>The contact that represents the kwekerij (the logged-in user) itself.</summary>
        public bool IsSelf { get; private set; }

        protected Contact() { }

        public Contact(string firstName, string lastName, string? email, string? phoneNumber, bool isSelf = false)
        {
            FirstName = firstName.Trim();
            LastName = lastName.Trim();
            Email = string.IsNullOrWhiteSpace(email) ? null : email.Trim();
            PhoneNumber = string.IsNullOrWhiteSpace(phoneNumber) ? null : phoneNumber.Trim();
            IsSelf = isSelf;
        }

        public string FullName => $"{FirstName} {LastName}".Trim();

        public Contact Update(string firstName, string lastName, string? email, string? phoneNumber)
        {
            FirstName = firstName.Trim();
            LastName = lastName.Trim();
            Email = string.IsNullOrWhiteSpace(email) ? null : email.Trim();
            PhoneNumber = string.IsNullOrWhiteSpace(phoneNumber) ? null : phoneNumber.Trim();
            return this;
        }

        public void AssignToKwekerij(int kwekerijId) => KwekerijId = kwekerijId;
    }
}
