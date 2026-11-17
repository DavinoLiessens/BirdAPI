using BirdAPI.Application.DTOs.Auth;
using System.Threading.Tasks;

namespace BirdAPI.Application.Services
{
    public interface IAuthService
    {
        Task<AuthResponse> LoginAsync(LoginRequest request);
        Task<AuthResponse> RegisterAsync(RegisterRequest request);
        Task<bool> ForgotPasswordAsync(ForgotPasswordRequest request);
        Task<bool> ResetPasswordAsync(ResetPasswordRequest request);
        Task<bool> ValidateTokenAsync(string token);
    }
}
