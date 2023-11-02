using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class UpdateBreederAndOwnerBird : Migration
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
                table: "OwnerBird");

            migrationBuilder.DropColumn(
                name: "OwnerId1",
                table: "OwnerBird");

            migrationBuilder.DropColumn(
                name: "BirdId1",
                table: "BreederBird");

            migrationBuilder.DropColumn(
                name: "BreederId1",
                table: "BreederBird");

            migrationBuilder.AlterColumn<int>(
                name: "OwnerId",
                table: "OwnerBird",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<int>(
                name: "BirdId",
                table: "OwnerBird",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<int>(
                name: "BreederId",
                table: "BreederBird",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AlterColumn<int>(
                name: "BirdId",
                table: "BreederBird",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_BirdId",
                table: "OwnerBird",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_OwnerId",
                table: "OwnerBird",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BirdId",
                table: "BreederBird",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BreederId",
                table: "BreederBird",
                column: "BreederId");

            migrationBuilder.AddForeignKey(
                name: "FK_BreederBird_Birds_BirdId",
                table: "BreederBird",
                column: "BirdId",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BreederBird_Breeders_BreederId",
                table: "BreederBird",
                column: "BreederId",
                principalTable: "Breeders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnerBird_Birds_BirdId",
                table: "OwnerBird",
                column: "BirdId",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnerBird_Owners_OwnerId",
                table: "OwnerBird",
                column: "OwnerId",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BreederBird_Birds_BirdId",
                table: "BreederBird");

            migrationBuilder.DropForeignKey(
                name: "FK_BreederBird_Breeders_BreederId",
                table: "BreederBird");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnerBird_Birds_BirdId",
                table: "OwnerBird");

            migrationBuilder.DropForeignKey(
                name: "FK_OwnerBird_Owners_OwnerId",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_OwnerBird_BirdId",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_OwnerBird_OwnerId",
                table: "OwnerBird");

            migrationBuilder.DropIndex(
                name: "IX_BreederBird_BirdId",
                table: "BreederBird");

            migrationBuilder.DropIndex(
                name: "IX_BreederBird_BreederId",
                table: "BreederBird");

            migrationBuilder.AlterColumn<long>(
                name: "OwnerId",
                table: "OwnerBird",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<long>(
                name: "BirdId",
                table: "OwnerBird",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "BirdId1",
                table: "OwnerBird",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "OwnerId1",
                table: "OwnerBird",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<long>(
                name: "BreederId",
                table: "BreederBird",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<long>(
                name: "BirdId",
                table: "BreederBird",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "BirdId1",
                table: "BreederBird",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BreederId1",
                table: "BreederBird",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_BirdId1",
                table: "OwnerBird",
                column: "BirdId1");

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_OwnerId1",
                table: "OwnerBird",
                column: "OwnerId1");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BirdId1",
                table: "BreederBird",
                column: "BirdId1");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BreederId1",
                table: "BreederBird",
                column: "BreederId1");

            migrationBuilder.AddForeignKey(
                name: "FK_BreederBird_Birds_BirdId1",
                table: "BreederBird",
                column: "BirdId1",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BreederBird_Breeders_BreederId1",
                table: "BreederBird",
                column: "BreederId1",
                principalTable: "Breeders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnerBird_Birds_BirdId1",
                table: "OwnerBird",
                column: "BirdId1",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OwnerBird_Owners_OwnerId1",
                table: "OwnerBird",
                column: "OwnerId1",
                principalTable: "Owners",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
