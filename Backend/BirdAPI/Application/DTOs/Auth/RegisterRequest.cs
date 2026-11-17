using System.ComponentModel.DataAnnotations;

namespace BirdAPI.Application.DTOs.Auth
{
    public class RegisterRequest
    {
        [Required(ErrorMessage = "Voornaam is verplicht")]
        [StringLength(50, ErrorMessage = "Voornaam mag maximaal 50 karakters bevatten")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Achternaam is verplicht")]
        [StringLength(50, ErrorMessage = "Achternaam mag maximaal 50 karakters bevatten")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is verplicht")]
        [EmailAddress(ErrorMessage = "Ongeldig email formaat")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Wachtwoord is verplicht")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Wachtwoord moet tussen 6 en 100 karakters zijn")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Bevestig wachtwoord is verplicht")]
        [Compare("Password", ErrorMessage = "Wachtwoord en bevestiging komen niet overeen")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }

        public DateTime? DateOfBirth { get; set; }
    }
}
