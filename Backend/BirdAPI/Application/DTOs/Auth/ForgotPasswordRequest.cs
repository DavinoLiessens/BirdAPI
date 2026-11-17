using System.ComponentModel.DataAnnotations;

namespace BirdAPI.Application.DTOs.Auth
{
    public class ForgotPasswordRequest
    {
        [Required(ErrorMessage = "Email is verplicht")]
        [EmailAddress(ErrorMessage = "Ongeldig email formaat")]
        public string Email { get; set; }
    }
}
