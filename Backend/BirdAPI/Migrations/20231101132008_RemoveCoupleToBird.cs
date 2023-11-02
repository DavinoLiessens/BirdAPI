using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class RemoveCoupleToBird : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Birds_CoupleId",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "CoupleId",
                table: "Birds");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
