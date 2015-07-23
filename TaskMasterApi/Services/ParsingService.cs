using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using TaskMasterApi.Models;

namespace TaskMasterApi.Services
{
    public class ParsingService
    {
        public Task[] GetTaskArray(string taskListText)
        {
            return new Task[] { new Task { Description = "Task 1" }, new Task { Description = "Task 2" } };
        }
    }
}