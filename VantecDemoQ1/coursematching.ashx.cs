using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VantecDemoQ1
{
    /// <summary>
    /// coursematching 的摘要说明
    /// </summary>
    public class coursematching : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            if (string.IsNullOrEmpty(context.Request["frompostcode"]) || string.IsNullOrEmpty(context.Request["topostcode"]))
            {
                context.Response.Write("error");
            }
            else
            {
                DataClassesDataContext DbContext = new DataClassesDataContext();
                if (DbContext.courses.Where<courses>(t => t.frompostcode == context.Request["frompostcode"] && t.topostcode == context.Request["topostcode"]).Count<courses>() > 0)
                {
                    context.Response.Write("1");
                }
                else
                {
                    context.Response.Write("0");
                }
            }
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