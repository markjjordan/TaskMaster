using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Ajax.Utilities;
using TaskMasterApi.Models;
using System.Text.RegularExpressions;

namespace TaskMasterApi.Services
{
    public class ParsingService
    {
        public List<Task> GetTaskArray(string taskListText)
        {
            var returnValue = new List<Task>();
            var lines = taskListText.Split(new string[] { "\\r\\n" }, StringSplitOptions.RemoveEmptyEntries);
            for (int i = 0; i < lines.Count(); i++)
            {
                var line = lines[i];
                var task = GetTaskFromTaskString(line, i + 1);
                returnValue.Add(task);
            }
            return returnValue;
        }

        public Task GetTaskFromTaskString(string taskString, int id)
        {
            var returnValue = new Task();
            returnValue.Id = id;
            returnValue.Description = taskString;
            returnValue.Context = GetContextQualifier(taskString);
            DateTime dateTime = new DateTime();
            DateTime.TryParse(GetDueDateQualifier(taskString), out dateTime);
            returnValue.DueDate = dateTime;
            returnValue.Project = GetProjectQualifier(taskString);
            return returnValue;
        }

        public string GetDueDateQualifier(string task)
        {
            var returnValue = "";
            string pattern = @"\s*due:(?<qualifierValue>[\d-/]+)";
            if (Regex.IsMatch(task, pattern))
            {
                Regex r = new Regex(pattern, RegexOptions.IgnoreCase | RegexOptions.Compiled);
                returnValue = r.Match(task).Result("${qualifierValue}");
                DateTime dateTime;
                if (!DateTime.TryParse(returnValue, out dateTime))
                {
                    returnValue = "";
                }
            }
            return returnValue;
        }

        public string GetContextQualifier(string task)
        {
            var returnValue = "";
            string pattern = @"\s*\#(?<qualifierValue>[\w-]+)";
            if (Regex.IsMatch(task, pattern))
            {
                Regex r = new Regex(pattern, RegexOptions.IgnoreCase | RegexOptions.Compiled);
                returnValue = r.Match(task).Result("${qualifierValue}");
            }
            return returnValue;
        }

        public string GetProjectQualifier(string task)
        {
            var returnValue = "";
            string pattern = @"\s*\+(?<qualifierValue>[\w-]+)";
            if (Regex.IsMatch(task, pattern))
            {
                Regex r = new Regex(pattern, RegexOptions.IgnoreCase | RegexOptions.Compiled);
                returnValue = r.Match(task).Result("${qualifierValue}");
            }
            return returnValue;
        }

        public bool GetIsCompletedQualifier(string task)
        {
            var returnValue = false;
            string pattern = @"^x\s+";
            if (Regex.IsMatch(task, pattern))
            {
                //Regex r = new Regex(pattern, RegexOptions.IgnoreCase | RegexOptions.Compiled);
                //returnValue = r.Match(task).Result("${qualifierValue}");
                returnValue = true;
            }
            return returnValue;
        }

    }
}