using System.Text;
using DropNet;

namespace TaskMasterApi.Services
{
    /// <summary>
    /// Class for accessing files on Dropbox
    /// </summary>
    public class DropboxDataService : IDataService
    {
        private readonly IDropNetClient _dropNetClient;

        public DropboxDataService(string apiKey, string appSecret, string accessToken)
        {
            _dropNetClient = new DropNetClient(apiKey, appSecret, accessToken, null)
            {
                UseSandbox = true
            };
        }

        /// <summary>
        /// Get the master list file from Dropbox 
        /// </summary>
        /// <returns>The file as a string</returns>
        public string GetMasterListText()
        {
            var file = _dropNetClient.GetFile("/master-list.txt");
            return Encoding.Default.GetString(file);
        }

        /// <summary>
        /// Write the master list file to Dropbox
        /// </summary>
        /// <param name="masterListText">The master list as a string</param>
        public void UpdateMasterListFile(string masterListText)
        {
            var masterListBytes = Encoding.Default.GetBytes(masterListText);

            _dropNetClient.UploadFile("/", "master-list.txt", masterListBytes);
        }
    }
}