using BirdAPI.Domain.AggregatesModel.BreederAggregate;
using BirdAPI.Domain.AggregatesModel.OwnerAggregate;

namespace BirdAPI.Infrastructure.Seed
{
	public class DataSeed
	{
		public static void Seed(BirdAPIContext context)
		{
			if (context.Database.CanConnect() && !context.Breeders.Any() && !context.Owners.Any())
			{
				var gerry1 = new Owner("Gerry", "Liessens", "gerry.liessens@telenet.be", "+32478365276");
				var gerry2 = new Breeder("Gerry", "Liessens", "gerry.liessens@telenet.be", "+32478365276");

				context.Owners.Add(gerry1);
				context.Breeders.Add(gerry2);

				context.SaveChanges();
			}
		}
	}
}
