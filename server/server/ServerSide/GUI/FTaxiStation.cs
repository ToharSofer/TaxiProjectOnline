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
    public partial class FTaxiStation : Form
    {
        public FTaxiStation()
        {
            InitializeComponent();
        }

        TaxiStationBLL TaxiStationBLL = new TaxiStationBLL();


        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {
            TaxiStationBLL.Add(new DataObject.TaxiStationDTO() {  StationName = StationNameTB.Text,
                                                    CityStationLocation = CityStationLocationTB.Text,
                                                    NumbrOfTaxis = int.Parse( NumbrOfTaxisTB.Text ),
                                                    PricePerKilometer = float.Parse( PricePerKilometerTB.Text )
                                                  });
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void CityStationLocationL_Click(object sender, EventArgs e)
        {

        }

        private void StationCodeL_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void StationNameBtn_Click(object sender, EventArgs e)
        {

        }

        private void CityStationLocationBtn_Click(object sender, EventArgs e)
        {

        }
    }
}
    