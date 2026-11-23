using BirdAPI.Application.Features.Bird.Commands;
using BirdAPI.Application.Features.Bird.Commands.InputModels;
using BirdAPI.Application.Features.Bird.Queries;
using BirdAPI.Application.Features.Contact.Queries;
using BirdAPI.Application.Features.Couple.Commands;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using BirdAPI.Domain.Enums;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Xunit;

namespace BirdAPI.Tests
{
    public class KwekerijTests
    {
        private static BirdInputModel NewBird(string ringNumber, int? breederId = null, int? ownerId = null) => new()
        {
            RingNumber = ringNumber,
            Gender = "MALE",
            BirthDate = new DateTime(2025, 5, 1),
            CageNumber = "A",
            Color = "Wildkleur",
            BirdType = BirdType.DISTELVINK,
            BreederId = breederId,
            OwnerId = ownerId,
        };

        [Fact]
        public async Task A_kwekerij_only_sees_its_own_data()
        {
            using var data = new TestData();
            data.AddBird("MINE-1", "MALE");
            data.AddContact("Piet", "Mijn");

            var (other, _) = data.AddKwekerij("Andere Kweker");
            data.Current.KwekerijId = other.Id;
            data.AddBird("OTHER-1", "MALE");
            data.Current.KwekerijId = data.Kwekerij.Id;

            using var context = data.NewContext();
            var birds = await new GetBirdsQueryHandler(context).Handle(new GetBirdsQuery(1, 10, null, "ALL", "0", "ALL"), default);
            var contacts = await new GetContactsQueryHandler(context).Handle(new GetContactsQuery(1, 10, null), default);

            Assert.Equal(new[] { "MINE-1" }, birds.Result.Results.Select(b => b.RingNumber));
            Assert.Equal(new[] { "Jan", "Piet" }, contacts.Result.Results.Select(c => c.FirstName));
        }

        [Fact]
        public async Task Not_logged_in_sees_nothing()
        {
            using var data = new TestData();
            data.AddBird("MINE-1", "MALE");

            data.Current.KwekerijId = null;
            using var context = data.NewContext();

            Assert.Empty(await context.Birds.ToListAsync());
            Assert.Empty(await context.Contacts.ToListAsync());
        }

        [Fact]
        public async Task A_bird_of_another_kwekerij_cannot_be_opened_by_id()
        {
            using var data = new TestData();
            var (other, _) = data.AddKwekerij("Andere Kweker");
            data.Current.KwekerijId = other.Id;
            var foreignBird = data.AddBird("OTHER-1", "MALE");
            data.Current.KwekerijId = data.Kwekerij.Id;

            using var context = data.NewContext();
            var result = await new GetBirdQueryHandler(context).Handle(new GetBirdQuery(foreignBird.Id), default);

            Assert.Equal(HttpStatusCode.NotFound, result.StatusCode);
        }

        [Fact]
        public async Task New_bird_defaults_to_the_kwekerij_itself_as_breeder_and_owner()
        {
            using var data = new TestData();

            var result = await new AddBirdCommandHandler(data.Context).Handle(new AddBirdCommand(NewBird("NEW-1")), default);

            Assert.True(result.Success);
            Assert.Equal(data.Self.Id, result.Result.Breeder.Id);
            Assert.Equal(data.Self.Id, result.Result.Owner.Id);
            Assert.True(result.Result.Breeder.IsSelf);
        }

        [Fact]
        public async Task New_bird_can_have_another_breeder()
        {
            using var data = new TestData();
            var piet = data.AddContact();

            var result = await new AddBirdCommandHandler(data.Context).Handle(new AddBirdCommand(NewBird("NEW-1", breederId: piet.Id)), default);

            Assert.Equal(piet.Id, result.Result.Breeder.Id);
            Assert.Equal(data.Self.Id, result.Result.Owner.Id);
        }

        [Fact]
        public async Task Ring_number_is_unique_per_kwekerij_regardless_of_spacing_and_case()
        {
            using var data = new TestData();
            data.AddBird("AOB WL021 23/30 NR 1", "MALE");

            var result = await new AddBirdCommandHandler(data.Context).Handle(new AddBirdCommand(NewBird("aob  wl021 23/30 nr 1")), default);

            Assert.False(result.Success);
            Assert.Equal(HttpStatusCode.BadRequest, result.StatusCode);
        }

        [Fact]
        public async Task The_same_ring_number_can_exist_in_another_kwekerij()
        {
            // A sold bird is registered by both the seller and the buyer
            using var data = new TestData();
            data.AddBird("AOB WL021 23/30 NR 1", "MALE");
            var (other, _) = data.AddKwekerij("Koper");
            data.Current.KwekerijId = other.Id;

            using var context = data.NewContext();
            var result = await new AddBirdCommandHandler(context).Handle(new AddBirdCommand(NewBird("AOB WL021 23/30 NR 1")), default);

            Assert.True(result.Success);
        }

        private static CreateCoupleInputModel Couple(int fatherId, int motherId, string name, int year, int round) => new()
        {
            Name = name,
            FatherId = fatherId,
            MotherId = motherId,
            StartedAt = new DateTime(year, round == 1 ? 3 : 7, 1),
            CageNumber = "K1",
            Description = "",
            Year = year,
            Round = round,
        };

        [Fact]
        public async Task A_bird_can_only_be_in_one_couple_per_breeding_round()
        {
            using var data = new TestData();
            var father = data.AddBird("F-1", "MALE");
            var mother = data.AddBird("M-1", "FEMALE");
            var otherMother = data.AddBird("M-2", "FEMALE");
            var handler = new CreateCoupleCommandHandler(data.Context);

            var first = await handler.Handle(new CreateCoupleCommand(Couple(father.Id, mother.Id, "2025 Ronde 1", 2025, 1)), default);
            var sameRound = await handler.Handle(new CreateCoupleCommand(Couple(father.Id, otherMother.Id, "2025 Ronde 1b", 2025, 1)), default);
            var nextRound = await handler.Handle(new CreateCoupleCommand(Couple(father.Id, otherMother.Id, "2025 Ronde 2", 2025, 2)), default);
            var nextYear = await handler.Handle(new CreateCoupleCommand(Couple(father.Id, mother.Id, "2026 Ronde 1", 2026, 1)), default);

            Assert.True(first.Success);
            Assert.False(sameRound.Success);
            Assert.True(nextRound.Success);
            Assert.True(nextYear.Success);
            Assert.Equal(new[] { (2025, 1), (2025, 2), (2026, 1) },
                data.Context.Couples.OrderBy(c => c.Year).ThenBy(c => c.Round).Select(c => new { c.Year, c.Round }).AsEnumerable().Select(c => (c.Year, c.Round)));
        }

        [Fact]
        public async Task Couple_season_defaults_to_the_start_year_and_round_1()
        {
            using var data = new TestData();
            var father = data.AddBird("F-1", "MALE");
            var mother = data.AddBird("M-1", "FEMALE");
            var model = Couple(father.Id, mother.Id, "Koppel", 2025, 1);
            model.Year = null;

            var result = await new CreateCoupleCommandHandler(data.Context).Handle(new CreateCoupleCommand(model), default);

            Assert.Equal(2025, result.Result.Year);
            Assert.Equal(1, result.Result.Round);
        }
    }
}
