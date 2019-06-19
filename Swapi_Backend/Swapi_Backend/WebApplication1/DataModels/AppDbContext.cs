using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApplication1.DataModels
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("name=SwapiDb")
        {

        }

        public DbSet<User> Users { get; set; }
    }
}