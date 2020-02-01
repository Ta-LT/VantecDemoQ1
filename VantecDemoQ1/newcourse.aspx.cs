using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VantecDemoQ1
{
    public partial class newcourse : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            DataClassesDataContext DbContext = new DataClassesDataContext();
            int lastRowIndex = -1;
            if (!string.IsNullOrEmpty(Request["lastRowIndex"]) && int.TryParse(Request["lastRowIndex"],out lastRowIndex))
            {
                for (int i = 0; i <= lastRowIndex; i++)
                {
                    if (string.IsNullOrEmpty(Request["frompostcode" + i.ToString()]) || string.IsNullOrEmpty(Request["topostcode" + i.ToString()]))
                    {
                        continue;
                    }

                    courses course = new courses();
                    course.sender = Request["sender" + i.ToString()];
                    course.fromname = Request["fromname" + i.ToString()];
                    course.fromadds = Request["fromadds" + i.ToString()];
                    course.frompostcode = Request["frompostcode" + i.ToString()];
                    course.toname = Request["toname" + i.ToString()];
                    course.toadds = Request["toadds" + i.ToString()];
                    course.topostcode = Request["topostcode" + i.ToString()];
                    course.senderprice = int.Parse(Request["senderprice" + i.ToString()] );
                    course.price = (int)Math.Round(course.senderprice * 1.15);
                    course.distance = int.Parse(Request["distance" + i.ToString()] );
                    course.leadtime = course.distance / 50 + 1;
                    course.createdate = DateTime.Now;
                    course.expdate = course.createdate.AddYears(1);
                    DbContext.courses.InsertOnSubmit(course);
                }
                DbContext.SubmitChanges();
            }
        }
    }
}