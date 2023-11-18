using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedShowToBird : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BirdShows",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Location = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Points = table.Column<int>(type: "int", nullable: false),
                    Rank = table.Column<int>(type: "int", nullable: false),
                    BirdId = table.Column<int>(type: "int", nullable: false),
                    BirdId1 = table.Column<int>(type: "int", nullable: true),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BirdShows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BirdShows_Birds_BirdId",
                        column: x => x.BirdId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BirdShows_Birds_BirdId1",
                        column: x => x.BirdId1,
                        principalTable: "Birds",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BirdShows_BirdId",
                table: "BirdShows",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdShows_BirdId1",
                table: "BirdShows",
                column: "BirdId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BirdShows");
        }
    }
}
