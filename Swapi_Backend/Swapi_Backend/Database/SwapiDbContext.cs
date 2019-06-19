using System.Data.Entity;

namespace Database
{
    public class SwapiDbContext : DbContext   
    {
        public SwapiDbContext(): base("SwapiDb")
        {
        }

        public virtual DbSet<User> Users { get; set; }
    }
}
