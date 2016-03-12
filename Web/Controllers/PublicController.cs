using Microsoft.AspNet.Mvc;

namespace Web.Controllers
{
    public class PublicController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
