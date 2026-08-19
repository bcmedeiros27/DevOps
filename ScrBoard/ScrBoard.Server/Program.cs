using Microsoft.EntityFrameworkCore;
using ScrBoard.Server.Data;
namespace ScrBoard.Server

{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add controller support
            builder.Services.AddControllers();
            builder.Services.AddDbContext<ScoreDbContext>(options =>options.UseSqlite(
               builder.Configuration.GetConnectionString("DefaultConnection")));

            // Add Swagger
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Enable Swagger
            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}