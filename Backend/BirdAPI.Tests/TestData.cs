using AutoMapper;
using BirdAPI.Application.Features.Bird.AutoMapper;
using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;
using BirdAPI.Domain.Enums;
using BirdAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Tests
{
    /// <summary>
    /// A fresh in-memory database per test, plus helpers to build a small breeding setup.
    /// </summary>
    public sealed class TestData : IDisposable
    {
        public BirdAPIContext Context { get; }
        public IMapper Mapper { get; }

        public TestData()
        {
            var options = new DbContextOptionsBuilder<BirdAPIContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;
            Context = new BirdAPIContext(options);
            Mapper = new MapperConfiguration(cfg => cfg.AddMaps(typeof(BirdAutomapperProfile).Assembly)).CreateMapper();
        }

        public Owner AddOwner(string firstName = "Jan", string lastName = "Peeters", string email = "jan@example.test")
        {
            var owner = new Owner(firstName, lastName, email, "+32000000000");
            Context.Owners.Add(owner);
            Context.SaveChanges();
            return owner;
        }

        public Breeder AddBreeder(string firstName = "Jan", string lastName = "Peeters", string email = "jan@example.test")
        {
            var breeder = new Breeder(firstName, lastName, email, "+32000000000");
            Context.Breeders.Add(breeder);
            Context.SaveChanges();
            return breeder;
        }

        public Bird AddBird(string ringNumber, string gender, Owner owner, Breeder breeder, bool isDead = false, DateTime? birthDate = null)
        {
            var bird = new Bird(ringNumber, gender, BirdType.DISTELVINK, birthDate ?? new DateTime(2023, 5, 1), "Wildkleur", "A", isDead: isDead);
            bird.BelongsToOwner(owner);
            bird.BelongsToBreeder(breeder);
            Context.Birds.Add(bird);
            Context.SaveChanges();
            return bird;
        }

        public Couple AddCouple(Bird father, Bird mother, string name = "Koppel 1")
        {
            var couple = new Couple(name, father, mother, new DateTime(2024, 3, 1), "K1", "");
            Context.Couples.Add(couple);
            Context.SaveChanges();
            return couple;
        }

        public BirdEgg AddEgg(Couple couple)
        {
            var egg = new BirdEgg(couple.Id, new DateTime(2024, 4, 1), null, null, null, null, null);
            Context.BirdEggs.Add(egg);
            Context.SaveChanges();
            return egg;
        }

        public void Dispose() => Context.Dispose();
    }
}
