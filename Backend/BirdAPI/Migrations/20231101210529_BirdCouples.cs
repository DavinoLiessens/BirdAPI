using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class BirdCouples : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Couples_CoupleId",
                table: "Birds");

            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_FatherId1",
                table: "Couples");

            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_MotherId1",
                table: "Couples");

            migrationBuilder.DropIndex(
                name: "IX_Couples_FatherId1",
                table: "Couples");

            migrationBuilder.DropIndex(
                name: "IX_Couples_MotherId1",
                table: "Couples");

            migrationBuilder.DropIndex(
                name: "IX_Birds_CoupleId",
                table: "Birds");

            migrationBuilder.DropColumn(
                name: "FatherId1",
                table: "Couples");

            migrationBuilder.DropColumn(
                name: "MotherId1",
                table: "Couples");

            migrationBuilder.DropColumn(
                name: "CoupleId",
                table: "Birds");

            migrationBuilder.CreateTable(
                name: "BirdCouples",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BirdId = table.Column<int>(type: "int", nullable: false),
                    CoupleId = table.Column<int>(type: "int", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BirdCouples", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BirdCouples_Birds_BirdId",
                        column: x => x.BirdId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BirdCouples_Couples_CoupleId",
                        column: x => x.CoupleId,
                        principalTable: "Couples",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Couples_FatherId",
                table: "Couples",
                column: "FatherId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_MotherId",
                table: "Couples",
                column: "MotherId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdCouples_BirdId",
                table: "BirdCouples",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdCouples_CoupleId",
                table: "BirdCouples",
                column: "CoupleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_FatherId",
                table: "Couples",
                column: "FatherId",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_MotherId",
                table: "Couples",
                column: "MotherId",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_FatherId",
                table: "Couples");

            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_MotherId",
                table: "Couples");

            migrationBuilder.DropTable(
                name: "BirdCouples");

            migrationBuilder.DropIndex(
                name: "IX_Couples_FatherId",
                table: "Couples");

            migrationBuilder.DropIndex(
                name: "IX_Couples_MotherId",
                table: "Couples");

            migrationBuilder.AddColumn<int>(
                name: "FatherId1",
                table: "Couples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MotherId1",
                table: "Couples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "CoupleId",
                table: "Birds",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Couples_FatherId1",
                table: "Couples",
                column: "FatherId1");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_MotherId1",
                table: "Couples",
                column: "MotherId1");

            migrationBuilder.CreateIndex(
                name: "IX_Birds_CoupleId",
                table: "Birds",
                column: "CoupleId");

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Couples_CoupleId",
                table: "Birds",
                column: "CoupleId",
                principalTable: "Couples",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_FatherId1",
                table: "Couples",
                column: "FatherId1",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_MotherId1",
                table: "Couples",
                column: "MotherId1",
                principalTable: "Birds",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
