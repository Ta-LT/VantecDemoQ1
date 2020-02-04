using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace VantecDemoQ1
{
    public partial class courselist : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            FpSpread1.ActiveSheetView.AllowSort = true;
            FpSpread1.ActiveSheetView.AutoFilterMode = FarPoint.Web.Spread.AutoFilterMode.FilterBar;
        }

        protected void FpSpread1_InsertCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
        {
            e.EditValues[12] = DateTime.Now;
            e.EditValues[13] = DateTime.Now;
        }

        protected void FpSpread1_Ungrouped(object sender, EventArgs e)
        {

        }

        protected void FpSpread1_UpdateCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
        {

        }

        protected void FpSpread1_DeleteCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
        {

        }

        protected void FpSpread1_ErrorCommand(object sender, FarPoint.Web.Spread.SpreadCommandEventArgs e)
        {

        }
    }
}