using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class ChangesToBirdModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsChildFemale",
                table: "Birds");

            migrationBuilder.RenameColumn(
                name: "Sex",
                table: "Birds",
                newName: "Gender");

            migrationBuilder.RenameColumn(
                name: "IsChildMale",
                table: "Birds",
                newName: "IsChild");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsChild",
                table: "Birds",
                newName: "IsChildMale");

            migrationBuilder.RenameColumn(
                name: "Gender",
                table: "Birds",
                newName: "Sex");

            migrationBuilder.AddColumn<bool>(
                name: "IsChildFemale",
                table: "Birds",
                type: "bit",
                nullable: true);
        }
    }
}
