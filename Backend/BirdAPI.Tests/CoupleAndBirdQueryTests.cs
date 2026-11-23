using BirdAPI.Application.Features.Bird.Queries;
using BirdAPI.Application.Features.Couple.Commands;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using System.Net;
using Xunit;

namespace BirdAPI.Tests
{
    public class CreateCoupleCommandHandlerTests
    {
        private static CreateCoupleInputModel Couple(int fatherId, int motherId) => new()
        {
            Name = "Koppel 1",
            FatherId = fatherId,
            MotherId = motherId,
            StartedAt = new DateTime(2024, 3, 1),
            CageNumber = "K1",
            Description = "",
        };

        [Fact]
        public async Task Valid_couple_is_created()
        {
            using var data = new TestData();
            var owner = data.AddOwner();
            var breeder = data.AddBreeder();
            var father = data.AddBird("F-1", "MALE", owner, breeder);
            var mother = data.AddBird("M-1", "FEMALE", owner, breeder);

            var result = await new CreateCoupleCommandHandler(data.Context, data.Mapper)
                .Handle(new CreateCoupleCommand(Couple(father.Id, mother.Id)), default);

            Assert.True(result.Success);
            Assert.Single(data.Context.Couples);
        }

        [Theory]
        [InlineData("FEMALE", "FEMALE", false)] // father is not male
        [InlineData("MALE", "MALE", false)]     // mother is not female
        [InlineData("MALE", "FEMALE", true)]    // one of them is dead
        public async Task Invalid_couple_is_rejected(string fatherGender, string motherGender, bool motherDead)
        {
            using var data = new TestData();
            var owner = data.AddOwner();
            var breeder = data.AddBreeder();
            var father = data.AddBird("F-1", fatherGender, owner, breeder);
            var mother = data.AddBird("M-1", motherGender, owner, breeder, isDead: motherDead);

            var result = await new CreateCoupleCommandHandler(data.Context, data.Mapper)
                .Handle(new CreateCoupleCommand(Couple(father.Id, mother.Id)), default);

            Assert.False(result.Success);
            Assert.Equal(HttpStatusCode.BadRequest, result.StatusCode);
            Assert.Empty(data.Context.Couples);
        }

        [Fact]
        public async Task Same_bird_as_father_and_mother_is_rejected()
        {
            using var data = new TestData();
            var bird = data.AddBird("F-1", "MALE", data.AddOwner(), data.AddBreeder());

            var result = await new CreateCoupleCommandHandler(data.Context, data.Mapper)
                .Handle(new CreateCoupleCommand(Couple(bird.Id, bird.Id)), default);

            Assert.False(result.Success);
        }
    }

    public class BirdQueryTests
    {
        [Fact]
        public async Task Year_filter_uses_the_birth_year()
        {
            using var data = new TestData();
            var owner = data.AddOwner();
            var breeder = data.AddBreeder();
            data.AddBird("NEW-YEAR", "MALE", owner, breeder, birthDate: new DateTime(2024, 1, 1));
            data.AddBird("OLD", "MALE", owner, breeder, birthDate: new DateTime(2023, 12, 31));

            var result = await new GetBirdsQueryHandler(data.Context, data.Mapper)
                .Handle(new GetBirdsQuery(1, 10, null, "ALL", "0", "2024"), default);

            Assert.Equal(new[] { "NEW-YEAR" }, result.Result.Results.Select(b => b.RingNumber));
        }

        [Fact]
        public async Task Invalid_year_is_ignored_instead_of_crashing()
        {
            using var data = new TestData();
            data.AddBird("B-1", "MALE", data.AddOwner(), data.AddBreeder());

            var result = await new GetBirdsQueryHandler(data.Context, data.Mapper)
                .Handle(new GetBirdsQuery(1, 10, null, "ALL", "0", "not-a-year"), default);

            Assert.True(result.Success);
            Assert.Single(result.Result.Results);
        }

        [Fact]
        public async Task Parents_are_found_via_the_egg_the_bird_came_from()
        {
            using var data = new TestData();
            var owner = data.AddOwner();
            var breeder = data.AddBreeder();
            var father = data.AddBird("F-1", "MALE", owner, breeder);
            var mother = data.AddBird("M-1", "FEMALE", owner, breeder);
            var couple = data.AddCouple(father, mother);
            var young = data.AddBird("YOUNG-1", "MALE", owner, breeder);
            var egg = data.AddEgg(couple);
            egg.BirdId = young.Id; // linked by id; the egg's ring number is not even filled in
            data.Context.SaveChanges();

            var result = await new GetBirdQueryHandler(data.Context, data.Mapper).Handle(new GetBirdQuery(young.Id), default);

            Assert.NotNull(result.Result.Parents);
            Assert.Equal(couple.Id, result.Result.Parents.CoupleId);
            Assert.Equal("F-1", result.Result.Parents.FatherRingNumber);
        }

        [Fact]
        public async Task Unknown_bird_returns_not_found()
        {
            using var data = new TestData();

            var result = await new GetBirdQueryHandler(data.Context, data.Mapper).Handle(new GetBirdQuery(12345), default);

            Assert.Equal(HttpStatusCode.NotFound, result.StatusCode);
        }

        [Fact]
        public async Task Saving_sets_the_created_timestamp()
        {
            using var data = new TestData();

            var bird = data.AddBird("B-1", "MALE", data.AddOwner(), data.AddBreeder());

            Assert.NotEqual(default, bird.Created);
        }
    }
}
