using System.Data.Entity;

namespace Database
{
    public class SwapiDbContext : DbContext   
    {
        public SwapiDbContext(): base()
        {

        }

        public virtual DbSet<User> Users { get; set; }
    }
}
