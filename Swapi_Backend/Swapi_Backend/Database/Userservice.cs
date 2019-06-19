using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public class Userservice
    {
        public bool Login(string username,string password)
        {
            using (var context = new SwapiDbContext())
            {
            var foo = context.Users.FirstOrDefault(u => u.UserName == username && u.Password == password);
                if (foo !=null)
                {
                    return true;
                }
                return false;
            }

        }
    }
}
