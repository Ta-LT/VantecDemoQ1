using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;

namespace VantecDemoQ1
{
    public partial class courselistjs : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!string.IsNullOrEmpty(Request["action"]))
            {
                switch (Request["action"])
                {
                    case "readall":
                        readall();
                        break;
                    case "update":
                        updateall();
                        break;
                    case "delete":
                        deleteall();
                        break;
                }
            }
        }

        private string readall()
        {
            string returnstring = "";

            DataClassesDataContext DbContext = new DataClassesDataContext();
            var courselist = DbContext.courses.ToArray<courses>();
            returnstring = JsonConvert.SerializeObject(courselist);

            Response.Clear();
            Response.Write(returnstring);
            Response.Flush();
            Response.End();
            return returnstring;
        }
        private void deleteall()
        {
            DataClassesDataContext DbContext = new DataClassesDataContext();
            var tempstr = (new System.IO.StreamReader(Request.InputStream)).ReadToEnd();
            int[] ids = JsonConvert.DeserializeObject<int[]>(tempstr);
            int numRecordDeleted = 0;
            if (ids.Length > 0)
            {
                StringBuilder sb = new StringBuilder();
                foreach (int i in ids)
                {
                    sb.Append(i.ToString() + ",");
                }
                string sqlText = "DELETE FROM courses WHERE Id IN (" + sb.ToString().Remove(sb.Length - 1, 1) + ")";
                numRecordDeleted = DbContext.ExecuteCommand(sqlText);
            }

            Response.Clear();
            Response.Write(numRecordDeleted.ToString());
            Response.Flush();
            Response.End();
        }
        private void updateall()
        {
            DataClassesDataContext DbContext = new DataClassesDataContext();
            var tempstr = (new System.IO.StreamReader(Request.InputStream)).ReadToEnd();
            courses[] updates = JsonConvert.DeserializeObject<courses[]>(tempstr);

            foreach (courses course in updates)
            {
                var tmpCourse = DbContext.courses.Where(e => e.Id == course.Id).FirstOrDefault();
                CopyPropertiesTo(course, tmpCourse);
            }

            DbContext.SubmitChanges();
            Response.Clear();
            Response.Write(updates.Length.ToString());
            Response.Flush();
            Response.End();
        }

        private void CopyPropertiesTo(object source, object dest)
        {
            var sourceProps = source.GetType().GetProperties().Where(x => x.CanRead).ToList();
            var destProps = dest.GetType().GetProperties()
                    .Where(x => x.CanWrite)
                    .ToList();

            foreach (var sourceProp in sourceProps)
            {
                if (destProps.Any(x => x.Name == sourceProp.Name))
                {
                    var p = destProps.First(x => x.Name == sourceProp.Name);
                    if (p.CanWrite)
                    {
                        p.SetValue(dest, sourceProp.GetValue(source, null), null);
                    }
                }
            }
        }
    }
}