using BirdAPI.Application.DTOs.Auth;
using BirdAPI.Application.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(IAuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                var response = await _authService.LoginAsync(request);
                return Ok(response);
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error in {Action}", ControllerContext.ActionDescriptor.ActionName);
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Er is een fout opgetreden tijdens het inloggen" });
            }
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                var response = await _authService.RegisterAsync(request);
                return Ok(response);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error in {Action}", ControllerContext.ActionDescriptor.ActionName);
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Er is een fout opgetreden tijdens de registratie" });
            }
        }

        [HttpPost("forgot-password")]
        [AllowAnonymous]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            try
            {
                await _authService.ForgotPasswordAsync(request);
                return Ok(new { message = "Als het opgegeven email adres bestaat, is er een reset link verstuurd" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error in {Action}", ControllerContext.ActionDescriptor.ActionName);
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Er is een fout opgetreden" });
            }
        }

        [HttpPost("reset-password")]
        [AllowAnonymous]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            try
            {
                await _authService.ResetPasswordAsync(request);
                return Ok(new { message = "Wachtwoord is succesvol gereset" });
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error in {Action}", ControllerContext.ActionDescriptor.ActionName);
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Er is een fout opgetreden" });
            }
        }

        [HttpGet("validate")]
        [Authorize]
        public async Task<IActionResult> ValidateToken()
        {
            try
            {
                var token = Request.Headers["Authorization"].ToString().Replace("Bearer ", "");
                var isValid = await _authService.ValidateTokenAsync(token);
                
                if (isValid)
                {
                    return Ok(new { isValid = true, message = "Token is geldig" });
                }
                
                return Unauthorized(new { isValid = false, message = "Token is ongeldig" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Unexpected error in {Action}", ControllerContext.ActionDescriptor.ActionName);
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Er is een fout opgetreden" });
            }
        }
    }
}
