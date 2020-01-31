using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VantecDemoQ1
{
    public partial class pricing : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (IsPostBack)
            {
                DataClassesDataContext DbContext = new DataClassesDataContext();
                orders TempOrder = new orders();

                TempOrder.frompostcode = Request["txtLoadFromAdds"];
                TempOrder.fromadds = Request["hffromAdds"];
                TempOrder.topostcode = Request["txtLoadToAdds"];
                TempOrder.toadds = Request["hftoAdds"];
                TempOrder.packagetype = Request["inlineRadioOptions"];
                TempOrder.packageamount = int.Parse(Request["packageNo"]);
                TempOrder.price = int.Parse(Request["priceoutput"].Split('円')[0]);
                TempOrder.createdate = DateTime.Now;

                DbContext.orders.InsertOnSubmit(TempOrder);
                DbContext.SubmitChanges();
                Response.Redirect("neworder.aspx?orderid=" + TempOrder.Id.ToString());
            }
        }
    }
}