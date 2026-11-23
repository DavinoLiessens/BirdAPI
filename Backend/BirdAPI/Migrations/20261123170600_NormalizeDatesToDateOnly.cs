using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    /// <summary>
    /// The frontend used to send dates as a local midnight converted to UTC, so a date picked
    /// in Belgium (UTC+1/UTC+2) was stored as 22:00 or 23:00 on the previous day.
    /// That moved e.g. a bird born on 1 January into the previous year in the year filter.
    /// The frontend now sends plain dates (yyyy-MM-dd); this migration moves the existing
    /// values to the intended calendar day at 00:00.
    ///
    /// Adding 12 hours and truncating to the date maps 22:00/23:00 to the next day and leaves
    /// values that are already at 00:00 on their own day, so the migration is safe to re-run.
    /// </summary>
    public partial class NormalizeDatesToDateOnly : Migration
    {
        private static readonly (string Table, string Column)[] DateColumns =
        {
            ("Birds", "BirthDate"),
            ("Couples", "StartedAt"),
            ("BirdEggs", "LayedOn"),
            ("BirdEggs", "CameOutOn"),
            ("BirdEggs", "FlyOutOn"),
        };

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            foreach (var (table, column) in DateColumns)
            {
                migrationBuilder.Sql(
                    $"UPDATE [{table}] SET [{column}] = CAST(CAST(DATEADD(hour, 12, [{column}]) AS date) AS datetime2) " +
                    $"WHERE [{column}] IS NOT NULL AND CAST([{column}] AS time) <> '00:00';");
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Not reversible: the original time-of-day values were an artefact of the time zone bug.
        }
    }
}
