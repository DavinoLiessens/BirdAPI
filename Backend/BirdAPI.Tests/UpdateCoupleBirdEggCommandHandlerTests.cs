using BirdAPI.Application.Features.Couple.Commands;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
using Microsoft.EntityFrameworkCore;
using System.Net;
using Xunit;

namespace BirdAPI.Tests
{
    public class UpdateCoupleBirdEggCommandHandlerTests
    {
        private static BirdEggInputModel CompleteEgg(int eggId, int coupleId, string ringNumber) => new()
        {
            Id = eggId,
            CoupleId = coupleId,
            LayedOn = new DateTime(2024, 4, 1),
            CameOutOn = new DateTime(2024, 4, 14),
            FlyOutOn = new DateTime(2024, 5, 10),
            RingNumber = ringNumber,
            Gender = "MALE",
            Color = "Wildkleur",
        };

        private static (TestData data, Domain.AggregatesModel.CoupleAggregate.Couple couple, Domain.AggregatesModel.CoupleAggregate.BirdEgg egg) Setup()
        {
            var data = new TestData();
            var father = data.AddBird("F-1", "MALE");
            var mother = data.AddBird("M-1", "FEMALE");
            var couple = data.AddCouple(father, mother);
            var egg = data.AddEgg(couple);
            return (data, couple, egg);
        }

        [Fact]
        public async Task Complete_egg_becomes_a_bird_bred_and_owned_by_the_kwekerij_itself()
        {
            var (data, couple, egg) = Setup();
            using var _ = data;
            var handler = new UpdateCoupleBirdEggCommandHandler(data.Context);

            var result = await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id, "YOUNG-1")), default);

            Assert.True(result.Success);
            var bird = await data.Context.Birds.Include(b => b.Owner).Include(b => b.Breeder).SingleAsync(b => b.RingNumber == "YOUNG-1");
            Assert.True(bird.Owner.IsSelf);
            Assert.True(bird.Breeder.IsSelf);
            Assert.Equal(data.Kwekerij.Id, bird.KwekerijId);
            Assert.Equal(new DateTime(2024, 4, 14), bird.BirthDate);
            Assert.Equal(bird.Id, (await data.Context.BirdEggs.SingleAsync(e => e.Id == egg.Id)).BirdId);
        }

        [Fact]
        public async Task Egg_can_be_updated_again_after_it_became_a_bird()
        {
            // Regression: the unique ring number check used to find the bird created from this
            // very egg and rejected every later update ("already exist").
            var (data, couple, egg) = Setup();
            using var _ = data;
            var handler = new UpdateCoupleBirdEggCommandHandler(data.Context);
            await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id, "YOUNG-1")), default);

            var update = CompleteEgg(egg.Id, couple.Id, "YOUNG-1");
            update.Color = "Isabel";
            var result = await handler.Handle(new UpdateCoupleBirdEggCommand(update), default);

            Assert.True(result.Success);
            Assert.Equal(1, await data.Context.Birds.CountAsync(b => b.RingNumber == "YOUNG-1"));
        }

        [Fact]
        public async Task Changing_the_ring_number_of_the_egg_also_changes_the_bird()
        {
            var (data, couple, egg) = Setup();
            using var _ = data;
            var handler = new UpdateCoupleBirdEggCommandHandler(data.Context);
            await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id, "YOUNG-1")), default);

            var result = await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id, "YOUNG-2")), default);

            Assert.True(result.Success);
            Assert.True(await data.Context.Birds.AnyAsync(b => b.RingNumber == "YOUNG-2"));
            Assert.False(await data.Context.Birds.AnyAsync(b => b.RingNumber == "YOUNG-1"));
        }

        [Fact]
        public async Task Ring_number_of_another_bird_is_rejected_even_with_other_casing()
        {
            var (data, couple, egg) = Setup();
            using var _ = data;
            var handler = new UpdateCoupleBirdEggCommandHandler(data.Context);

            var result = await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id, "f-1 ")), default);

            Assert.False(result.Success);
            Assert.Equal(HttpStatusCode.BadRequest, result.StatusCode);
        }


        [Fact]
        public async Task Egg_of_another_couple_is_not_found()
        {
            var (data, couple, egg) = Setup();
            using var _ = data;
            var handler = new UpdateCoupleBirdEggCommandHandler(data.Context);

            var result = await handler.Handle(new UpdateCoupleBirdEggCommand(CompleteEgg(egg.Id, couple.Id + 99, "YOUNG-1")), default);

            Assert.Equal(HttpStatusCode.NotFound, result.StatusCode);
        }
    }
}
