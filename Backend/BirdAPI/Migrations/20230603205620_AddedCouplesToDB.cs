using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddedCouplesToDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Couples",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FatherId = table.Column<int>(type: "int", nullable: false),
                    MotherId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Couples", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Couples_Birds_FatherId",
                        column: x => x.FatherId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_Couples_Birds_MotherId",
                        column: x => x.MotherId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "BirdEggs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LayedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CameOutOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RingNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FlyOutOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CoupleId = table.Column<int>(type: "int", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BirdEggs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BirdEggs_Couples_CoupleId",
                        column: x => x.CoupleId,
                        principalTable: "Couples",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BirdEggs_CoupleId",
                table: "BirdEggs",
                column: "CoupleId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_FatherId",
                table: "Couples",
                column: "FatherId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_MotherId",
                table: "Couples",
                column: "MotherId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BirdEggs");

            migrationBuilder.DropTable(
                name: "Couples");
        }
    }
}
