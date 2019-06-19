using Database;
using System.Linq;
using System.Web.Http;

namespace Swapi.Web.Controllers
{
    [RoutePrefix("api/users")]
    public class UserApiController : ApiController
    {
        [Route("login/")]
        [HttpGet]
        public IHttpActionResult LogIn(string username, string password)
        {
            // This causes a reference to the EF project. This is ugly and should use a repository and a DTO instead. But that is gold plating right now
            using (var context = new SwapiDbContext())
            {
                var foo = context.Users.FirstOrDefault(u=> u.UserName== username && u.Password == password);
                if (foo != null)
                {
                    return Ok(true);
                }
                else
                {
                    return Ok(false);
                }
            }
        }
    }
}
