using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VantecDemoQ1
{
    public partial class showemail : System.Web.UI.Page
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
            if (order.state != 2)
            {
                Response.Redirect("neworder.aspx?orderid=" + orderid.ToString());
            }
        }
    }
}