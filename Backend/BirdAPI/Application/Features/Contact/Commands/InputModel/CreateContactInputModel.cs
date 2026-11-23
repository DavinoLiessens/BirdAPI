namespace BirdAPI.Application.Features.Contact.Commands.InputModel
{
    public class CreateContactInputModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
    }
}
