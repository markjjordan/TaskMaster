using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskMasterApi.Services;

namespace TaskMasterApi.Tests.Services
{
    [TestClass]
    public class ParsingServiceTest
    {
        // Arrange / Given
        // Act / When
        // Assert / Then


        [TestMethod]
        public void GetTaskArray_Test()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var tasks = @"!a build story map for +gitting-stuff-done" + Environment.NewLine + "!c transfer google books to kindle" + Environment.NewLine + "pick up prescription at costcos due:2015-07-30";
            var tasksArray = parsingService.GetTaskArray(tasks);

            // Assert / Then
            Assert.AreEqual(tasksArray.Count, 3);
            Assert.AreEqual("!a build story map for +gitting-stuff-done", tasksArray[0].Description);
            Assert.AreEqual(2, tasksArray[1].Id);
            Assert.AreEqual(3, tasksArray[2].Id);

        }

        [TestMethod]
        public void GetDueDateQualifier()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"pick up prescription at costcos due:2015-07-30";
            var qualifierValue = parsingService.GetDueDateQualifier(task);

            // Assert / Then
            Assert.AreEqual("2015-07-30", qualifierValue);
        }

        [TestMethod]
        public void GetDueDateQualifier_invalidDate()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"pick up prescription at costcos due:2015-13-30";
            var qualifierValue = parsingService.GetDueDateQualifier(task);

            // Assert / Then
            Assert.AreEqual("", qualifierValue);
        }

        [TestMethod]
        public void GetContextQualifier()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"#someday pick up prescription at costcos due:2015-07-30";
            var qualifierValue = parsingService.GetContextQualifier(task);

            // Assert / Then
            Assert.AreEqual("someday", qualifierValue);
        }

        [TestMethod]
        public void GetProjectQualifier_exists()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"pick up prescription at costcos +Comments-In-Code due:2015-07-30";
            var qualifierValue = parsingService.GetProjectQualifier(task);

            // Assert / Then
            Assert.AreEqual("Comments-In-Code", qualifierValue);
        }

        [TestMethod]
        public void GetProjectQualifier_existsNot()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"pick up prescription at costcos Comments-In-Code due:2015-07-30";
            var qualifierValue = parsingService.GetProjectQualifier(task);

            // Assert / Then
            Assert.AreEqual("", qualifierValue);
        }

        [TestMethod]
        public void GetIsCompletedQualifier_is()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"x pick up prescription at costcos due:2015-07-30";
            var qualifierValue = parsingService.GetIsCompletedQualifier(task);

            // Assert / Then
            Assert.AreEqual(true, qualifierValue);
        }

        [TestMethod]
        public void GetIsCompletedQualifier_isNot()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var task = @"pick up prescription at costcos due:2015-07-30";
            var qualifierValue = parsingService.GetIsCompletedQualifier(task);

            // Assert / Then
            Assert.AreEqual(false, qualifierValue);
        }

        [TestMethod]
        public void GetTask()
        {
            // Arrange / Given
            var parsingService = new ParsingService();

            // Act / When
            var taskString = @"pick up prescription at costcos due:2015-07-30";
            var task = parsingService.GetTaskFromTaskString(taskString, 1);

            // Assert / Then
            Assert.AreEqual(1, task.Id);
            Assert.AreEqual(taskString, task.Description);
            DateTime dateTime;
            DateTime.TryParse("2015-07-30", out dateTime);
            Assert.AreEqual(dateTime, task.DueDate);
            Assert.AreEqual("", task.Context);
            Assert.AreEqual(false, task.IsCompleted);
            Assert.AreEqual("", task.Project);
        }


    }
}
