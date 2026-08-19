using Microsoft.EntityFrameworkCore;
using ScrBoard.Server.Models;

namespace ScrBoard.Server.Data
{
    public class ScoreDbContext : DbContext
    {
        public ScoreDbContext(DbContextOptions<ScoreDbContext> options)
            : base(options)
        {
        }

        public DbSet<Score> Scores { get; set; }
    }
}