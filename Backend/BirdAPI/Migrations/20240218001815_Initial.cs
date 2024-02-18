using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Breeders",
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
                    table.PrimaryKey("PK_Breeders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Owners",
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
                    table.PrimaryKey("PK_Owners", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Birds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RingNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirdType = table.Column<int>(type: "int", nullable: false),
                    BirthDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CageNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BreederId = table.Column<int>(type: "int", nullable: false),
                    OwnerId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsDead = table.Column<bool>(type: "bit", nullable: true),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Birds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Birds_Breeders_BreederId",
                        column: x => x.BreederId,
                        principalTable: "Breeders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Birds_Owners_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Owners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

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
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "BreederBird",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BreederId = table.Column<int>(type: "int", nullable: false),
                    BirdId = table.Column<int>(type: "int", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BreederBird", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BreederBird_Birds_BirdId",
                        column: x => x.BirdId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BreederBird_Breeders_BreederId",
                        column: x => x.BreederId,
                        principalTable: "Breeders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Couples",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StartedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FatherId = table.Column<int>(type: "int", nullable: false),
                    MotherId = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CageNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
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
                name: "OwnerBird",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OwnerId = table.Column<int>(type: "int", nullable: false),
                    BirdId = table.Column<int>(type: "int", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OwnerBird", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OwnerBird_Birds_BirdId",
                        column: x => x.BirdId,
                        principalTable: "Birds",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OwnerBird_Owners_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Owners",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateTable(
                name: "BirdEggs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LayedOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CameOutOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    RingNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FlyOutOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Color = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BirdId = table.Column<int>(type: "int", nullable: true),
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
                name: "IX_BirdCouples_BirdId",
                table: "BirdCouples",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdCouples_CoupleId",
                table: "BirdCouples",
                column: "CoupleId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdEggs_CoupleId",
                table: "BirdEggs",
                column: "CoupleId");

            migrationBuilder.CreateIndex(
                name: "IX_Birds_BreederId",
                table: "Birds",
                column: "BreederId");

            migrationBuilder.CreateIndex(
                name: "IX_Birds_OwnerId",
                table: "Birds",
                column: "OwnerId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdShows_BirdId",
                table: "BirdShows",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BirdId",
                table: "BreederBird",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_BreederBird_BreederId",
                table: "BreederBird",
                column: "BreederId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_FatherId",
                table: "Couples",
                column: "FatherId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_MotherId",
                table: "Couples",
                column: "MotherId");

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_BirdId",
                table: "OwnerBird",
                column: "BirdId");

            migrationBuilder.CreateIndex(
                name: "IX_OwnerBird_OwnerId",
                table: "OwnerBird",
                column: "OwnerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BirdCouples");

            migrationBuilder.DropTable(
                name: "BirdEggs");

            migrationBuilder.DropTable(
                name: "BirdShows");

            migrationBuilder.DropTable(
                name: "BreederBird");

            migrationBuilder.DropTable(
                name: "OwnerBird");

            migrationBuilder.DropTable(
                name: "Couples");

            migrationBuilder.DropTable(
                name: "Birds");

            migrationBuilder.DropTable(
                name: "Breeders");

            migrationBuilder.DropTable(
                name: "Owners");
        }
    }
}
