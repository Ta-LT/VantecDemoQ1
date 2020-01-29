using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;

namespace VantecDemoQ1
{
    /// <summary>
    /// 
    /// </summary>
    public class relay : IHttpHandler
    {
        private readonly string ApiKey = "AIzaSyD8MLqCo98BkkZJ8KZIms3osqSoi4pdt3c";
        private static HttpClient client = new HttpClient();
        public void ProcessRequest(HttpContext context)
        {
            var HttpRequest = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://maps.googleapis.com/maps/api/place/" + PlaceAutocomplete(context))
            };

            var response = client.SendAsync(HttpRequest);

            var responseString = response.Result.Content.ReadAsStringAsync();

            context.Response.ContentType = "application/json";
            context.Response.Write(responseString);
        }

        private string PlaceAutocomplete(HttpContext context)
        {
            string returnStr = "autocomplete/json?";



            return returnStr;
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}