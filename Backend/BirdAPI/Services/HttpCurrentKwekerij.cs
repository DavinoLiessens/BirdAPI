using BirdAPI.Infrastructure;

namespace BirdAPI.Services
{
    /// <summary>Reads the kwekerij of the logged-in user from the JWT (claim <see cref="ClaimType"/>).</summary>
    public class HttpCurrentKwekerij : ICurrentKwekerij
    {
        public const string ClaimType = "kwekerij_id";

        private readonly IHttpContextAccessor _httpContextAccessor;

        public HttpCurrentKwekerij(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public int? KwekerijId
        {
            get
            {
                var value = _httpContextAccessor.HttpContext?.User.FindFirst(ClaimType)?.Value;
                return int.TryParse(value, out var id) ? id : null;
            }
        }
    }
}
