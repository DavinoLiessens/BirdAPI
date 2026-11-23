using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BirdAPI.Migrations
{
    public partial class AddKwekerijAndContacts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BirdEggs_Couples_CoupleId",
                table: "BirdEggs");

            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Breeders_BreederId",
                table: "Birds");

            migrationBuilder.DropForeignKey(
                name: "FK_Birds_Owners_OwnerId",
                table: "Birds");

            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_FatherId",
                table: "Couples");

            migrationBuilder.DropForeignKey(
                name: "FK_Couples_Birds_MotherId",
                table: "Couples");





            migrationBuilder.AddColumn<DateTime>(
                name: "EndedAt",
                table: "Couples",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "KwekerijId",
                table: "Couples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Round",
                table: "Couples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Couples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "KwekerijId",
                table: "BirdShows",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "RingNumber",
                table: "Birds",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "KwekerijId",
                table: "Birds",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "NormalizedRingNumber",
                table: "Birds",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "KwekerijId",
                table: "BirdEggs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "KwekerijId",
                table: "BirdCouples",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Kwekerijen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ClaimEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Kwekerijen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Kwekerijen_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    KwekerijId = table.Column<int>(type: "int", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    IsSelf = table.Column<bool>(type: "bit", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Contacts_Kwekerijen_KwekerijId",
                        column: x => x.KwekerijId,
                        principalTable: "Kwekerijen",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });


            // ---------------------------------------------------------------------------------
            // Data: move all existing data into the kwekerij of Gerry Liessens and merge the
            // Owners + Breeders into one contact list (matched on name; emails are unreliable).
            // ---------------------------------------------------------------------------------
            migrationBuilder.Sql("ALTER TABLE [Contacts] ADD [LegacyOwnerId] int NULL, [LegacyBreederId] int NULL;");

            migrationBuilder.Sql(@"
DECLARE @now datetime2 = SYSUTCDATETIME();

IF EXISTS (SELECT 1 FROM [Owners]) OR EXISTS (SELECT 1 FROM [Breeders]) OR EXISTS (SELECT 1 FROM [Birds]) OR EXISTS (SELECT 1 FROM [Couples])
BEGIN
    -- The account that registers with this email address claims the kwekerij
    DECLARE @claimEmail nvarchar(256) = COALESCE(
        (SELECT TOP 1 LTRIM(RTRIM([Email])) FROM [Owners]
          WHERE UPPER(LTRIM(RTRIM([FirstName]))) = 'GERRY' AND UPPER(LTRIM(RTRIM([LastName]))) = 'LIESSENS' AND [Email] LIKE '%_@_%.__%' ORDER BY [Id]),
        'gerry.liessens@telenet.be');

    INSERT INTO [Kwekerijen] ([Name], [UserId], [ClaimEmail], [Created], [Modified])
    VALUES ('Gerry Liessens', NULL, @claimEmail, @now, NULL);
    DECLARE @k int = SCOPE_IDENTITY();

    -- Every owner becomes a contact
    INSERT INTO [Contacts] ([KwekerijId], [FirstName], [LastName], [Email], [PhoneNumber], [IsSelf], [Created], [Modified], [LegacyOwnerId])
    SELECT @k, LTRIM(RTRIM([FirstName])), LTRIM(RTRIM([LastName])),
           CASE WHEN [Email] LIKE '%_@_%.__%' THEN LTRIM(RTRIM([Email])) END,
           NULLIF(LTRIM(RTRIM([PhoneNumber])), ''), 0, @now, NULL, [Id]
    FROM [Owners];

    -- A breeder with the same name as an owner is the same person (1-to-1 match)
    WITH m AS (
        SELECT c.[Id] AS cid, b.[Id] AS bid,
               ROW_NUMBER() OVER (PARTITION BY b.[Id] ORDER BY c.[Id]) AS rb,
               ROW_NUMBER() OVER (PARTITION BY c.[Id] ORDER BY b.[Id]) AS rc
        FROM [Contacts] c
        JOIN [Breeders] b ON UPPER(LTRIM(RTRIM(b.[FirstName]))) = UPPER(c.[FirstName])
                         AND UPPER(LTRIM(RTRIM(b.[LastName]))) = UPPER(c.[LastName])
        WHERE c.[KwekerijId] = @k)
    UPDATE c SET [LegacyBreederId] = m.bid
    FROM [Contacts] c JOIN m ON m.cid = c.[Id]
    WHERE m.rb = 1 AND m.rc = 1;

    -- The other breeders become contacts of their own
    INSERT INTO [Contacts] ([KwekerijId], [FirstName], [LastName], [Email], [PhoneNumber], [IsSelf], [Created], [Modified], [LegacyBreederId])
    SELECT @k, LTRIM(RTRIM(b.[FirstName])), LTRIM(RTRIM(b.[LastName])),
           CASE WHEN b.[Email] LIKE '%_@_%.__%' THEN LTRIM(RTRIM(b.[Email])) END,
           NULLIF(LTRIM(RTRIM(b.[PhoneNumber])), ''), 0, @now, NULL, b.[Id]
    FROM [Breeders] b
    WHERE NOT EXISTS (SELECT 1 FROM [Contacts] c WHERE c.[LegacyBreederId] = b.[Id]);

    -- Gerry Liessens is the kwekerij itself
    UPDATE TOP (1) [Contacts] SET [IsSelf] = 1
    WHERE [KwekerijId] = @k AND UPPER([FirstName]) = 'GERRY' AND UPPER([LastName]) = 'LIESSENS';
    IF @@ROWCOUNT = 0
        INSERT INTO [Contacts] ([KwekerijId], [FirstName], [LastName], [Email], [PhoneNumber], [IsSelf], [Created], [Modified])
        VALUES (@k, 'Gerry', 'Liessens', @claimEmail, NULL, 1, @now, NULL);

    -- Birds point to contacts instead of owners/breeders
    UPDATE b SET
        [KwekerijId] = @k,
        [OwnerId] = (SELECT TOP 1 c.[Id] FROM [Contacts] c WHERE c.[LegacyOwnerId] = b.[OwnerId]),
        [BreederId] = (SELECT TOP 1 c.[Id] FROM [Contacts] c WHERE c.[LegacyBreederId] = b.[BreederId])
    FROM [Birds] b;

    -- Couples: season from the name (""2022 Ronde 1"") or else from the start date
    UPDATE [Couples] SET
        [KwekerijId] = @k,
        [Year] = CASE WHEN [Name] LIKE '[12][0-9][0-9][0-9]%' THEN CAST(LEFT([Name], 4) AS int) ELSE YEAR([StartedAt]) END,
        [Round] = CASE WHEN [Name] LIKE '%ronde 2%' OR [Name] LIKE '%ronde2%' THEN 2 ELSE 1 END;

    UPDATE [BirdEggs] SET [KwekerijId] = @k;
    UPDATE [BirdShows] SET [KwekerijId] = @k;
    UPDATE [BirdCouples] SET [KwekerijId] = @k;
END

-- Ring numbers are compared in normalized form: trimmed, single spaces, upper case
UPDATE [Birds] SET [NormalizedRingNumber] =
    UPPER(REPLACE(REPLACE(REPLACE(REPLACE(LTRIM(RTRIM(REPLACE(REPLACE(REPLACE([RingNumber], CHAR(9), ' '), CHAR(10), ' '), CHAR(13), ' '))),
        '    ', ' '), '   ', ' '), '  ', ' '), '  ', ' '));
");

            migrationBuilder.Sql("ALTER TABLE [Contacts] DROP COLUMN [LegacyOwnerId], [LegacyBreederId];");

            migrationBuilder.DropTable(
                name: "BreederBird");

            migrationBuilder.DropTable(
                name: "OwnerBird");

            migrationBuilder.DropTable(
                name: "Breeders");

            migrationBuilder.DropTable(
                name: "Owners");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_KwekerijId",
                table: "Couples",
                column: "KwekerijId");

            migrationBuilder.CreateIndex(
                name: "IX_Couples_KwekerijId_Year_Round",
                table: "Couples",
                columns: new[] { "KwekerijId", "Year", "Round" });

            migrationBuilder.CreateIndex(
                name: "IX_BirdShows_KwekerijId",
                table: "BirdShows",
                column: "KwekerijId");

            migrationBuilder.CreateIndex(
                name: "IX_Birds_KwekerijId",
                table: "Birds",
                column: "KwekerijId");

            migrationBuilder.CreateIndex(
                name: "IX_Birds_KwekerijId_NormalizedRingNumber",
                table: "Birds",
                columns: new[] { "KwekerijId", "NormalizedRingNumber" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_BirdEggs_KwekerijId",
                table: "BirdEggs",
                column: "KwekerijId");

            migrationBuilder.CreateIndex(
                name: "IX_BirdCouples_KwekerijId",
                table: "BirdCouples",
                column: "KwekerijId");

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_KwekerijId_Self",
                table: "Contacts",
                column: "KwekerijId",
                unique: true,
                filter: "[IsSelf] = 1");

            migrationBuilder.CreateIndex(
                name: "IX_Kwekerijen_UserId",
                table: "Kwekerijen",
                column: "UserId",
                unique: true,
                filter: "[UserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_BirdEggs_Couples_CoupleId",
                table: "BirdEggs",
                column: "CoupleId",
                principalTable: "Couples",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Contacts_BreederId",
                table: "Birds",
                column: "BreederId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Contacts_OwnerId",
                table: "Birds",
                column: "OwnerId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Birds_Kwekerijen_KwekerijId",
                table: "Birds",
                column: "KwekerijId",
                principalTable: "Kwekerijen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_FatherId",
                table: "Couples",
                column: "FatherId",
                principalTable: "Birds",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Birds_MotherId",
                table: "Couples",
                column: "MotherId",
                principalTable: "Birds",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Couples_Kwekerijen_KwekerijId",
                table: "Couples",
                column: "KwekerijId",
                principalTable: "Kwekerijen",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Owners/Breeders were merged into Contacts and all data was assigned to a kwekerij;
            // that cannot be undone automatically. Restore a database backup instead.
            throw new NotSupportedException("AddKwekerijAndContacts cannot be reverted. Restore a backup taken before the migration.");
        }
    }
}
