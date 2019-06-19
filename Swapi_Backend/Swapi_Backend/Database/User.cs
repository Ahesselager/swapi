using System.ComponentModel.DataAnnotations;

namespace Database
{
    public class User
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
