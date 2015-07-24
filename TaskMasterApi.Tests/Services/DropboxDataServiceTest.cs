using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TaskMasterApi.Services;

namespace TaskMasterApi.Tests.Services
{
    [TestClass]
    public class DropboxDataServiceTest
    {
        private DropboxDataService _dropboxDataService;

        [TestInitialize]
        public void SetUp()
        {
            _dropboxDataService = new DropboxDataService("2ye0qkgiebbbmc8", "knyd9c9wdcrnm6v",
                "C7A5Ol0rTmAAAAAAAAAAB7zOq76TMXIKLMsaVivYagaza8XMU__RqGw3D2syR3SK");
        }

        [TestMethod]
        public void GetMasterListText_Test()
        {
            var fileContents = _dropboxDataService.GetMasterListText();
        }


        [TestMethod]
        public void UpdateMasterListFile_Test()
        {
            const string masterListText = "This is item 1\r\nThis is item 2\r\n";
            _dropboxDataService.UpdateMasterListFile(masterListText);
        }
    }
}
