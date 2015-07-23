using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DropNet;
using DropNet.Models;

namespace TaskMasterApi.Services
{

    public class DropboxDataService
    {
        private readonly IDropNetClient _dropNetClient;

        public DropboxDataService(string apiKey, string appSecret, string accessToken)
        {
            _dropNetClient = new DropNetClient(apiKey, appSecret, accessToken, null)
            {
                UseSandbox = true
            };
        }

        public string GetMasterListText()
        {
            var file = _dropNetClient.GetFile("/master-list.txt");
            return System.Text.Encoding.Default.GetString(file);
        }

    }
}