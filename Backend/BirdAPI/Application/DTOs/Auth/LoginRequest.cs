using System.ComponentModel.DataAnnotations;

namespace BirdAPI.Application.DTOs.Auth
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Email is verplicht")]
        [EmailAddress(ErrorMessage = "Ongeldig email formaat")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Wachtwoord is verplicht")]
        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
