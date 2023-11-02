using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class RemovedCorruptData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BreederBird_Birds_BirdId1",
                table: "BreederBird");

            migrationBuilder.DropForeignKey(
                name: "FK_BreederBird_Breeders_BreederId1",
                table: "BreederBird");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnerBird_Birds_BirdId1",
                table: "OwnerBird");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnerBird_Owners_OwnerId1",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_OwnerBird_BirdId1",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_OwnerBird_OwnerId1",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_BreederBird_BirdId1",
                table: "BreederBird");

            migrationBuilder.DropIndex(
                name: "IX_BreederBird_BreederId1",
                table: "BreederBird");

            migrationBuilder.DropColumn(
                name: "BirdId1",
                table: "BreederBird");

            migrationBuilder.DropColumn(
                name: "BreederId1",
                table: "BreederBird");

            migrationBuilder.DropColumn(
                name: "BirdId1",
                table: "OwnerBird");

            migrationBuilder.DropColumn(
                name: "OwnerId1",
                table: "OwnerBird");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
