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
    options.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=db-bird;Trusted_Connection=True;", sqloptions =>
    {
        sqloptions.MigrationsAssembly(typeof(Program).Assembly.GetName().Name);
        sqloptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
    });
});
builder.Services.AddHostedService<InitializeDatabaseService>();
builder.Services.AddSpaStaticFiles(configuration => { configuration.RootPath = "ClientApp"; });


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

app.UseEndpoints(endpoints =>
{
    // Default Fallback Route: Redirect to /ClientApp/index.html for any other unmatched route
    endpoints.MapFallbackToFile("/ClientApp/index.html");

    // Custom Endpoint: Redirect to /ClientApp/index.html
    endpoints.MapGet("/ClientApp", async context =>
    {
        context.Response.Redirect("/ClientApp/index.html");
    });

    // Custom Endpoint: Redirect to /swagger/index.html
    endpoints.MapGet("/swagger", async context =>
    {
        context.Response.Redirect("/swagger/index.html");
    });

});

app.Run();
