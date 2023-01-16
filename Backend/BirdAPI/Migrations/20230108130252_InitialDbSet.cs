using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class InitialDbSet : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgeOfBirth",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "Creator",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "Dead",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "KindOfBird",
                table: "Birds");

            migrationBuilder.AddColumn<int>(
                name: "BirdType",
                table: "Birds",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "Birds",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "BreederId",
                table: "Birds",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsChildFemale",
                table: "Birds",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsChildMale",
                table: "Birds",
                type: "bit",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDead",
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

            migrationBuilder.CreateTable(
                name: "Breeder",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Breeder", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Birds_BreederId",
                table: "Birds",
                column: "BreederId");

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Breeder_BreederId",
                table: "Birds",
                column: "BreederId",
                principalTable: "Breeder",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Breeder_BreederId",
                table: "Birds");

            migrationBuilder.DropTable(
                name: "Breeder");

            migrationBuilder.DropIndex(
                name: "IX_Birds_BreederId",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "BirdType",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "BreederId",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsChildFemale",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsChildMale",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsDead",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsFather",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "IsMother",
                table: "Birds");

            migrationBuilder.AddColumn<string>(
                name: "AgeOfBirth",
                table: "Birds",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Creator",
                table: "Birds",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Dead",
                table: "Birds",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "KindOfBird",
                table: "Birds",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
