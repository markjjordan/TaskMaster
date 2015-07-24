using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using TechTalk.SpecFlow;

namespace TaskMasterApi.Tests
{
    [Binding]
    public class SpecFlowFeature1Steps
    {
        //private int number1 { get; set; }
        //private int number2 { get; set; }
        private int result = 0;

        [Given(@"I have entered (.*) into the calculator")]
        public void GivenIHaveEnteredIntoTheCalculator(int p0)
        {
            result += p0;
        }
        
        [When(@"I press add")]
        public void WhenIPressAdd()
        {
        }
        
        [Then(@"the result should be (.*) on the screen")]
        public void ThenTheResultShouldBeOnTheScreen(int p0)
        {
            Assert.AreEqual(p0, result, "Result is not correct");
        }
    }
}
