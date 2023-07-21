using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class RemovedUnusedPropsForBird : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsChild",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsFather",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsMother",
                table: "Birds");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsChild",
                table: "Birds",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsFather",
                table: "Birds",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsMother",
                table: "Birds",
                type: "bit",
                nullable: true);
        }
    }
}
