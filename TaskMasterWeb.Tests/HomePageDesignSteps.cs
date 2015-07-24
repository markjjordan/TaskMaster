using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using TaskMasterWeb.Tests.PageObjects;
using TechTalk.SpecFlow;

namespace TaskMasterWeb.Tests
{
    [Binding]
    public class HomePageDesignSteps
    {
        private IWebDriver _driver;
        private string _baseUrl;
        private HomePage _homePage;

        [Given(@"I am on the TaskMaster site")]
        public void GivenIAmOnTheTaskMasterSite()
        {
            _driver = new FirefoxDriver();
            _baseUrl = "http://localhost:58720/";
        }

        [When(@"I go to the home page")]
        public void WhenIGoToTheHomePage()
        {
            _homePage = new HomePage(_driver);
        }
        
        [Then(@"the page header text should be ""(.*)""")]
        public void ThenThePageHeaderTextShouldBe(string p0)
        {
            Assert.AreEqual("Task Master", _homePage.GetH1Text());
            Assert.AreEqual("rgba(8, 54, 67, 1)", _homePage.GetMastheadBackgroundColor());
        }
    }
}
