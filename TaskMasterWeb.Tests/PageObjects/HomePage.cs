using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenQA.Selenium;

namespace TaskMasterWeb.Tests.PageObjects
{
    public class HomePage
    {
        private readonly IWebDriver _driver;

        public HomePage(IWebDriver driver)
        {
            _driver = driver;

            driver.Navigate().GoToUrl("http://localhost:58720");
        }

        public HomePage DoSomething()
        {
            // Do some stuff
            return this;
        }

        public HomePage DoSomethingElse()
        {
            // do stuff
            return this;
        }
        public string GetH1Text()
        {
            return _driver.FindElement(By.CssSelector("h1")).Text;
        }

        public string GetMastheadBackgroundColor()
        {
            return _driver.FindElement(By.Id("masthead")).GetCssValue("background-color");
        }

    }
}
