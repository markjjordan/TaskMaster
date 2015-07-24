using System;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;

namespace SeleniumTests
{
    [TestClass]
    public class Test
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;
        
        [TestInitialize]
        public void SetupTest()
        {
            driver = new FirefoxDriver();
            baseURL = "https://duckduckgo.com/";
            verificationErrors = new StringBuilder();
        }
        
        [TestCleanup]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
            Assert.AreEqual("", verificationErrors.ToString());
        }
        
        [TestMethod]
        public void TheTest()
        {
            var page = new HomeScreenPage(driver);

            page.ClearForm();
            page.TypeSelenium();
            page.ClickText();
            page.ClickTitle();

            Assert.IsTrue(Regex.IsMatch(driver.FindElement(By.CssSelector("h2")).Text, "^exact:What is Selenium[\\s\\S]$"));
            Assert.AreEqual("Selenium - Web Browser Automations", driver.Title);
        }

        public class HomeScreenPage
        {
            private IWebDriver driver;

            public HomeScreenPage(IWebDriver driver)
            {
                this.driver = driver;
                this.driver.Navigate().GoToUrl("https://duckduckgo.com");
            }

            public void ClearForm()
            {
                driver.FindElement(By.Id("search_form_input_homepage")).Clear();
            }

            public void TypeSelenium()
            {
                driver.FindElement(By.Id("search_form_input_homepage")).SendKeys("selenium");
            }

            public void ClickText()
            {
                driver.FindElement(By.Id("search_button_homepage")).Click();
            }

            public void ClickTitle()
            {
                driver.FindElement(By.LinkText("Selenium - Web Browser Automation")).Click();
            }

        }
    }
}
