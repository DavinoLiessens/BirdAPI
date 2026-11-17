using BirdAPI.Application.Services;
using BirdAPI.Config;
using BirdAPI.Domain.AggregatesModel.UserAggregate;
using BirdAPI.Infrastructure;
using BirdAPI.Infrastructure.Seed;
using BirdAPI.Services;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// JWT Settings Configuration
builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JwtSettings"));
var jwtSettings = builder.Configuration.GetSection("JwtSettings").Get<JwtSettings>();

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(typeof(Program).Assembly);
builder.Services.AddMediatR(typeof(Program).Assembly);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database Context
builder.Services.AddDbContext<BirdAPIContext>(options =>
{
    options.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=db-bird;Trusted_Connection=True;", sqloptions =>
    {
        sqloptions.MigrationsAssembly(typeof(Program).Assembly.GetName().Name);
        sqloptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
    });
});

// Identity Configuration
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    // Password settings
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireUppercase = false;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequiredLength = 6;

    // Lockout settings
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    // User settings
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<BirdAPIContext>()
.AddDefaultTokenProviders();

// JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Secret)),
        ClockSkew = TimeSpan.Zero
    };
});

// Authorization
builder.Services.AddAuthorization();

// Custom Services
builder.Services.AddScoped<IAuthService, AuthService>();

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

// Authentication & Authorization middleware - IMPORTANT: Order matters!
app.UseAuthentication();
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
