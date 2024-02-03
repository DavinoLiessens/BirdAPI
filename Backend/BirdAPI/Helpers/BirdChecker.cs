using BirdAPI.Domain.Enums;

namespace BirdAPI.Helpers
{
    public class BirdChecker
    {
        public static (bool IsNotAll, BirdType BirdType) CheckBirdType(string frontendValue)
        {
            // Parse the string value to BirdType enum
            if (Enum.TryParse<BirdType>(frontendValue, out var birdType))
            {
                // Return the result
                return (birdType != BirdType.ALL, birdType);
            }

            // Handle invalid input (could not parse)
            return (false, BirdType.ALL);
        }
    }
}
