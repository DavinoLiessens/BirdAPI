using System.Text.RegularExpressions;

namespace Wwsv.Domain.SeedWork
{
    public static class RingNumber
    {
        private static readonly Regex Whitespace = new(@"\s+", RegexOptions.Compiled);

        /// <summary>
        /// The form used to compare ring numbers: trimmed, single spaces, upper case.
        /// "aob wl021  23/30 nr 1" and "AOB WL021 23/30 NR 1" are the same ring.
        /// </summary>
        public static string Normalize(string ringNumber) =>
            Whitespace.Replace(ringNumber.Trim(), " ").ToUpperInvariant();
    }
}
