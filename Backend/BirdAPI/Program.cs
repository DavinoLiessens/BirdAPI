using BirdAPI.Infrastructure;
using MediatR;
using Microsoft.EntityFrameworkCore;

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
    options.UseSqlServer("Server=app-bird-platform-server.mysql.database.azure.com;Database=app-bird-platform-database;Port=3306;User Id=chscdripmq;Password=T68PY38G02U4D355$;SSL Mode=Required", sqloptions =>
    {
        sqloptions.MigrationsAssembly(typeof(Program).Assembly.GetName().Name);
        sqloptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
    builder.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
