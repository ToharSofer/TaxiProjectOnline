using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using BLL;

namespace GUI
{
    public partial class FTaxi : Form
    {
        public FTaxi()
        {
            InitializeComponent();
        }

        private void FTaxi_Load(object sender, EventArgs e)
        {
            TaxiBLL taxiBLL = new TaxiBLL();
        }

    }
}
