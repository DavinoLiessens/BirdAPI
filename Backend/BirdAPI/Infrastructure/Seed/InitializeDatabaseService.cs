namespace BirdAPI.Infrastructure.Seed;

public class InitializeDatabaseService : BackgroundService
{
	private readonly IServiceProvider _provider;

	public InitializeDatabaseService(IServiceProvider provider)
	{
		_provider = provider;
	}

	protected override Task ExecuteAsync(CancellationToken stoppingToken)
	{
		using var scope = _provider.CreateScope();
		var context = scope.ServiceProvider.GetRequiredService<BirdAPIContext>();
		BirdAPIInitializer.Initialize(context);
		return Task.CompletedTask;
	}
}

internal static class BirdAPIInitializer
{
	private static bool _hasBeenInitialised;

	public static void Initialize(BirdAPIContext context)
	{
		if (_hasBeenInitialised) return;

		DataSeed.Seed(context);

		_hasBeenInitialised = true;
	}
}