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
using DataObject;

namespace GUI
{
    public partial class FRegularUserEnterId : Form
    {
        public FRegularUserEnterId()
        {
            InitializeComponent();
        }

        private void FRegularUserEnterId_Load(object sender, EventArgs e)
        {

        }
        // לעדכון משתמש
        private void button2_Click(object sender, EventArgs e)
        {
            FRegularUser regularUserUpdate = new FRegularUser();
            regularUserUpdate.Show();
            this.Hide();
        }
        // אישור
        private void button1_Click(object sender, EventArgs e)
        {
            RegularUserDTO regularUserDTO = new RegularUserDTO();

            regularUserDTO = RegularUserBLL.GetAll().Find(a => a.UserId == int.Parse(textBox1.Text));

            if (regularUserDTO == null)
            {
                label3.Text = "אין משתמש";
            }

            else
            {
                label3.Text = regularUserDTO.UserName;
            }
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
