using System.Web.Http;

namespace Swapi.Web.Controllers
{
    [RoutePrefix("api/users")]
    public class UserApiController : ApiController
    {
        [Route("login/")]
        public IHttpActionResult LogIn(string username, string password)
        {
            return Ok();
        }
    }
}
