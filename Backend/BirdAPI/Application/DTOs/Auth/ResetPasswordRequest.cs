using System.ComponentModel.DataAnnotations;

namespace BirdAPI.Application.DTOs.Auth
{
    public class ResetPasswordRequest
    {
        [Required(ErrorMessage = "Email is verplicht")]
        [EmailAddress(ErrorMessage = "Ongeldig email formaat")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Reset token is verplicht")]
        public string Token { get; set; }

        [Required(ErrorMessage = "Nieuw wachtwoord is verplicht")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Wachtwoord moet tussen 6 en 100 karakters zijn")]
        [DataType(DataType.Password)]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Bevestig wachtwoord is verplicht")]
        [Compare("NewPassword", ErrorMessage = "Wachtwoord en bevestiging komen niet overeen")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}
