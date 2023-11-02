using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedCoupleToBird : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CoupleId",
                table: "Birds",
                type: "int",
                nullable: false,
                defaultValue: 0);            

            migrationBuilder.CreateIndex(
                name: "IX_Birds_CoupleId",
                table: "Birds",
                column: "CoupleId");           
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Birds_CoupleId",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "CoupleId",
                table: "Birds");            
        }
    }
}
