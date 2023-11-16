using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedNewOwnerAndBreeder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // add new items
            migrationBuilder.Sql("EXEC('INSERT INTO dbo.[Breeders] (FirstName, LastName, Email, PhoneNumber, Created) VALUES (''Gerry'', ''Liessens'', ''gerry.liessens@telenet.be'', ''+32478365276'', ''2023-01-10'');')");
            migrationBuilder.Sql("EXEC('INSERT INTO dbo.[Owners] (FirstName, LastName, Email, PhoneNumber, Created) VALUES (''Gerry'', ''Liessens'', ''gerry.liessens@telenet.be'', ''+32478365276'', ''2023-01-10'');')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
