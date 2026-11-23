namespace BirdAPI.Application.Features.Contact.ResponseModels
{
    public class ContactResponseModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public bool IsSelf { get; set; }
        public string FullName => $"{FirstName} {LastName}".Trim();
    }
}
