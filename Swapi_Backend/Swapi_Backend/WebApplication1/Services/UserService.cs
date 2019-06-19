using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.DataModels;

namespace WebApplication1.Services
{
    public class UserService
    {
        public UserService() { }

        public bool Login(string username, string password)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    return context.Users.Any(e => e.Username == username && e.Password == password);
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public bool CreateUser(string username, string password)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    context.Users.Add(new User()
                    {
                        Username = username,
                        Password = password
                    });
                    context.SaveChanges();
                    return true;
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}