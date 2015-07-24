using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TechTalk.SpecFlow;

namespace TaskMasterApi.Tests
{
    [Binding]
    public class SpecFlowFeature1Steps
    {
        private int number1 { get; set; }
        private int number2 { get; set; }
        private int result { get; set; }

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            number1 = p0;
        }
        
        [Given(@"I have entered (.*) into the calculator as well")]
        public void GivenIHaveEnteredIntoTheCalculatorAsWell(int p0)
        {
            number2 = p0;
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
            result = number1 + number2;
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, result, "Result is not correct");
        }
    }
}
