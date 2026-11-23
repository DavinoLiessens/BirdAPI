using BirdAPI.Domain.AggregatesModel.BirdAggregate;
using BirdAPI.Domain.AggregatesModel.ContactAggregate;
using BirdAPI.Domain.AggregatesModel.CoupleAggregate;
using BirdAPI.Domain.AggregatesModel.KwekerijAggregate;
using BirdAPI.Domain.Enums;
using BirdAPI.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace BirdAPI.Tests
{
    /// <summary>The kwekerij a test acts as; can be switched to simulate another logged-in user.</summary>
    public sealed class TestKwekerij : ICurrentKwekerij
    {
        public int? KwekerijId { get; set; }
    }

    /// <summary>
    /// A fresh in-memory database per test with one kwekerij (logged in) and its "self" contact,
    /// plus helpers to build a small breeding setup.
    /// </summary>
    public sealed class TestData : IDisposable
    {
        private readonly string _databaseName = Guid.NewGuid().ToString();

        public TestKwekerij Current { get; } = new();
        public BirdAPIContext Context { get; }
        public Kwekerij Kwekerij { get; }
        public Contact Self { get; }

        public TestData()
        {
            Context = NewContext();
            (Kwekerij, Self) = AddKwekerij("Jan Peeters");
            Current.KwekerijId = Kwekerij.Id;
        }

        /// <summary>A second context on the same database (e.g. to read without the change tracker).</summary>
        public BirdAPIContext NewContext() =>
            new(new DbContextOptionsBuilder<BirdAPIContext>().UseInMemoryDatabase(_databaseName).Options, Current);

        public (Kwekerij, Contact) AddKwekerij(string name)
        {
            var kwekerij = new Kwekerij(name);
            Context.Kwekerijen.Add(kwekerij);
            Context.SaveChanges();

            var names = name.Split(' ', 2);
            var self = new Contact(names[0], names.Length > 1 ? names[1] : "", null, null, isSelf: true);
            self.AssignToKwekerij(kwekerij.Id);
            Context.Contacts.Add(self);
            Context.SaveChanges();
            return (kwekerij, self);
        }

        public Contact AddContact(string firstName = "Piet", string lastName = "Janssens")
        {
            var contact = new Contact(firstName, lastName, null, null);
            Context.Contacts.Add(contact);
            Context.SaveChanges();
            return contact;
        }

        public Bird AddBird(string ringNumber, string gender, Contact? owner = null, Contact? breeder = null, bool isDead = false, DateTime? birthDate = null)
        {
            var bird = new Bird(ringNumber, gender, BirdType.DISTELVINK, birthDate ?? new DateTime(2023, 5, 1), "Wildkleur", "A", isDead: isDead);
            bird.BelongsToOwner(owner ?? Self);
            bird.BelongsToBreeder(breeder ?? Self);
            Context.Birds.Add(bird);
            Context.SaveChanges();
            return bird;
        }

        public Couple AddCouple(Bird father, Bird mother, string name = "Koppel 1", int year = 2024, int round = 1)
        {
            var couple = new Couple(name, father, mother, new DateTime(year, 3, 1), "K1", "", year, round);
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
