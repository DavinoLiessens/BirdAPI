using BirdAPI.Infrastructure;
using BirdAPI.Infrastructure.Seed;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddMediatR(typeof(Program).Assembly);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BirdAPIContext>(options =>
{
    options.UseSqlServer("Server=tcp:bird-platform.database.windows.net,1433;Initial Catalog=db-bird-platform;Persist Security Info=False;User ID=bird-admin;Password=Zeppos123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", sqloptions =>
    {
        sqloptions.MigrationsAssembly(typeof(Program).Assembly.GetName().Name);
        sqloptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
    });
});
builder.Services.AddHostedService<InitializeDatabaseService>();
builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp"; });
builder.Services.AddApplicationInsightsTelemetry();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    // uncomment this if you want to access the Swagger UI view !!!
    //app.UseSwaggerUI();
}

app.UseCors(builder =>
    builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseSpaStaticFiles();
app.UseRouting();
app.UseAuthorization();

// Serve Angular static files from the ClientAppDist folder
app.UseSpa(spa => { spa.Options.SourcePath = "ClientApp"; });

app.MapControllers();

app.Run();
