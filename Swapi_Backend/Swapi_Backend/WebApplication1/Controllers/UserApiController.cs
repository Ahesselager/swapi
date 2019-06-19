using Database;
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

            var userservice = new Userservice();
            return Ok(userservice.Login(username, password));
        }
    }
}