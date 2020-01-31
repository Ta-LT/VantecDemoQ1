using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VantecDemoQ1
{
    public partial class neworder : System.Web.UI.Page
    {
        DataClassesDataContext DbContext = new DataClassesDataContext();
        public orders order = new orders();
        protected void Page_Load(object sender, EventArgs e)
        {
            int orderid = 0;
            if (!string.IsNullOrEmpty(Request["orderid"]) && int.TryParse(Request["orderid"], out orderid))
            {

            }
            order = DbContext.orders.Where(order => order.Id == orderid).FirstOrDefault();
            if (order.state.HasValue)
            {
                if (order.state.Value == 1)
                {
                    btnSubmit.Text = "确认订单";
                }
                else
                {
                    btnSubmit.Text = "发送邮件给用户";
                }
            }
            else
            {
                btnSubmit.Text = "提交给VTC担当者";
            }
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            order.length = int.Parse(Request["length"]);
            order.width = int.Parse(Request["width"]);
            order.height = int.Parse(Request["height"]);
            order.weight = int.Parse(Request["weight"]);

            order.goodskind = Request["goodskind"];
            order.clientstartdate = DateTime.Parse(Request["clientstartdate"] + " " + Request["clientstarttime"]);
            order.clientnote = Request["clientnote"];
            order.clientenddate = DateTime.Parse(Request["clientenddate"] + " 00:00");
            order.packagedep = Request["packagedep"];

            order.sender = Request["sender"];
            order.driver = Request["driver"];
            order.trucknumber = Request["trucknumber"];
            order.trucktype = Request["trucktype"];
            order.driverphonenumber = Request["driverphonenumber"];
            order.driverphonenumber = Request["driverphonenumber"];
            if (string.IsNullOrEmpty(Request["pickupdate"]))
            {
                order.pickupdate = null;
            }
            else
            {
                order.pickupdate = DateTime.Parse(Request["pickupdate"] + " " + (string.IsNullOrEmpty(Request["pickuptime"]) ? "00:00" : Request["pickuptime"]));
            }
            if (string.IsNullOrEmpty(Request["dropoffdate"]))
            {
                order.dropoffdate = null;
            }
            else
            {
                order.dropoffdate = DateTime.Parse(Request["dropoffdate"] + " " + (string.IsNullOrEmpty(Request["dropofftime"]) ? "00:00" : Request["dropofftime"]));
            }
            order.note = Request["note"];

            if (!order.state.HasValue)
            {
                order.state = 1;
            }
            else if (order.state == 1)
            {
                order.state = 2;
            }
            order.modifydate = DateTime.Now;
            DbContext.SubmitChanges();
            if (order.state == 2)
            {
                Response.Redirect("showemail.aspx?orderid=" + order.Id.ToString());
            }
        }
    }
}