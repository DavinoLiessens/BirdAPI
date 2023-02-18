using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddTestOwnerAndBreeder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // add new items
            migrationBuilder.Sql("EXEC('INSERT INTO dbo.[Breeders] (FirstName, LastName, Email, PhoneNumber, Created) VALUES (''Test'', ''Breeder'', ''testBreeder@breeder.com'', ''+32471300157'', ''2023-01-10'');')");
            migrationBuilder.Sql("EXEC('INSERT INTO dbo.[Owners] (FirstName, LastName, Email, PhoneNumber, Created) VALUES (''Test'', ''Owner'', ''testOwner@owner.com'', ''+32471300157'', ''2023-01-10'');')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
