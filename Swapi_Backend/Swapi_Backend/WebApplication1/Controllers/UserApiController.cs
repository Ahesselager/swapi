
using System;
using System.Net;
using System.Web.Http;
using WebApplication1.Services;

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
            var userService = new UserService();
            return Ok(userService.Login(username, password));
        }
        [Route("createUser/")]
        [HttpPost]
        public IHttpActionResult CreateUser(string username, string password)
        {
            try
            {
                var userService = new UserService();
                if (userService.CreateUser(username, password))
                {
                    return Ok($"User with username {username} was created successfully");
                }
                else
                {
                    return BadRequest("Something went wrong - We should never end up here");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.StackTrace); //This is bad - never show stacktrace to user - But we have it here for debug
            }
        }
    }
}