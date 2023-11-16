using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedBirdIdToBirdEgg : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BirdId",
                table: "BirdEggs",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirdId",
                table: "BirdEggs");
        }
    }
}
