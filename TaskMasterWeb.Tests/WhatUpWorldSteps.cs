using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Support.PageObjects;
using TechTalk.SpecFlow;

namespace TaskMasterWeb.Tests
{
    [Binding]
    public class WhatUpWorldSteps
    {
        private readonly Calculator _calculator;

        public WhatUpWorldSteps()
        {
            _calculator = new Calculator();    
        }

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            _calculator.EnterNumber(p0);
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            _calculator.Add();
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, _calculator.Result);
        }
    }
}
