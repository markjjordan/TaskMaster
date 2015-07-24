using System.Collections.Generic;
using System.Linq;

namespace TaskMasterWeb.Tests
{
    public class Calculator
    {
        private readonly List<int> _numbers;

        public int Result { get; set; }

        public Calculator()
        {
            _numbers = new List<int>();
            Result = 0;
        }

        public void EnterNumber(int number)
        {
            _numbers.Add(number);
        }

        public void Add()
        {
            Result = _numbers.Sum();
            _numbers.Clear();
        }
    }
}
