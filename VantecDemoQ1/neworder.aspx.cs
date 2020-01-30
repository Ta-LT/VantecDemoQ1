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
        public orders order = new orders();
        protected void Page_Load(object sender, EventArgs e)
        {
            int orderid = 0;
            if (!string.IsNullOrEmpty(Request["orderid"]) && int.TryParse(Request["orderid"], out orderid))
            {

            }
            DataClassesDataContext DbContext = new DataClassesDataContext();
            order = DbContext.orders.Where(order => order.Id == orderid).FirstOrDefault();
            btnSubmit.Text = string.IsNullOrEmpty(order.state) ? "提交给VTC担当者" : "确认订单";
        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            int orderid = 0;
        }
    }
}