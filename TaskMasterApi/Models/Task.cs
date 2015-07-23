using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TaskMasterApi.Models
{
    public class Task
    {
        public string Description { get; set; }
        public DateTime DueDate { get; set; }
        public string Context { get; set; }
        public string Project { get; set; }
        public bool IsCompleted { get; set; }
    }
}