using System.Collections.Generic;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using TaskMasterApi.Models;
using TaskMasterApi.Services;

namespace TaskMasterApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TasksController : ApiController
    {
        private readonly IDataService _dropboxDataService;
        private readonly ParsingService _parsingService;

        public TasksController()
        {
            _dropboxDataService = new DropboxDataService("2ye0qkgiebbbmc8",
                                                         "knyd9c9wdcrnm6v",
                                                         "C7A5Ol0rTmAAAAAAAAAAB7zOq76TMXIKLMsaVivYagaza8XMU__RqGw3D2syR3SK");
            _parsingService = new ParsingService();
        }

        // GET api/tasks
        public IEnumerable<Task> Get()
        {
            if (HttpContext.Current.Session["TaskList"] == null)
            {
                var textFile = _dropboxDataService.GetMasterListText();
                HttpContext.Current.Session["TaskList"] = _parsingService.GetTaskArray(textFile);
            }

            return (List<Task>)HttpContext.Current.Session["TaskList"];
        }

        // GET api/tasks/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/tasks
        public void Post([FromBody]string value)
        {
        }

        // PUT api/tasks/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/tasks/5
        public void Delete(int id)
        {
        }

        public void Push()
        {

        }

        public void Pull()
        {

        }
    }
}
