using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ScrBoard.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScoresController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetScores()
        {
            var scores = new[]
            {
                new { Name = "Brandon", Time = 245 },
                new { Name = "Huge G. As", Time = 287 },
                new { Name = "Pro Fesser", Time = 310 }
            };

            return Ok(scores);
        }
    }
}
