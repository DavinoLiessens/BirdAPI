using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedBreederToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Breeder_BreederId",
                table: "Birds");

            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Owners_OwnerId",
                table: "Birds");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Breeder",
                table: "Breeder");

            migrationBuilder.RenameTable(
                name: "Breeder",
                newName: "Breeders");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Breeders",
                table: "Breeders",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "BreederBird",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BreederId = table.Column<long>(type: "bigint", nullable: false),
                    BirdId = table.Column<long>(type: "bigint", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: true)
                });

            migrationBuilder.CreateTable(
                name: "OwnerBird",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OwnerId = table.Column<long>(type: "bigint", nullable: false),
                    BirdId = table.Column<long>(type: "bigint", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime", nullable: true)
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Breeders_BreederId",
                table: "Birds",
                column: "BreederId",
                principalTable: "Breeders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Owners_OwnerId",
                table: "Birds",
                column: "OwnerId",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Breeders_BreederId",
                table: "Birds");

            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Owners_OwnerId",
                table: "Birds");

            migrationBuilder.DropTable(
                name: "BreederBird");

            migrationBuilder.DropTable(
                name: "OwnerBird");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Breeders",
                table: "Breeders");

            migrationBuilder.RenameTable(
                name: "Breeders",
                newName: "Breeder");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Breeder",
                table: "Breeder",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Breeder_BreederId",
                table: "Birds",
                column: "BreederId",
                principalTable: "Breeder",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Owners_OwnerId",
                table: "Birds",
                column: "OwnerId",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
