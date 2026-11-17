# Script om Identity packages te installeren
Write-Host "Installing Microsoft.AspNetCore.Identity.EntityFrameworkCore..." -ForegroundColor Green
dotnet add BirdAPI\BirdAPI.csproj package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 6.0.5

Write-Host "Installing Microsoft.AspNetCore.Authentication.JwtBearer..." -ForegroundColor Green
dotnet add BirdAPI\BirdAPI.csproj package Microsoft.AspNetCore.Authentication.JwtBearer --version 6.0.5

Write-Host "Installing System.IdentityModel.Tokens.Jwt..." -ForegroundColor Green
dotnet add BirdAPI\BirdAPI.csproj package System.IdentityModel.Tokens.Jwt --version 6.16.0

Write-Host "`nAll packages installed successfully!" -ForegroundColor Cyan
Write-Host "Press any key to continue..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
