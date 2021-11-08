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
    public partial class FRegularUser : Form
    {
        public FRegularUser()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            
        }

        #region Function ListRegularUser
        //הצגת השמות
        int index = 0;
        List<RegularUserDTO> RegularUserDTO = new List<RegularUserDTO>();

        private void Form3_Load(object sender, EventArgs e)
        {
            RegularUserDTO = RegularUserBLL.GetAll();
            textBox1.Text = RegularUserDTO[index].UserName;
        }


        #endregion
        //קדימה
        private void button2_Click(object sender, EventArgs e)
        {
            index++;

            if (index == RegularUserDTO.Count)
            {
                index = 0;
            }

            textBox1.Text = RegularUserDTO[index].UserName;

        }
        //אחורה
        private void button3_Click(object sender, EventArgs e)
        {
            index--;

            if (index < 0)
            {
                index = RegularUserDTO.Count - 1;
            }

            textBox1.Text = RegularUserDTO[index].UserName;

        }
        //רענון
        private void button6_Click(object sender, EventArgs e)
        {
            RegularUserDTO=RegularUserBLL.GetAll();
        }
        //עדכון
        private void button1_Click(object sender, EventArgs e)
        {
            //RegularUserDTO regularUserDTO = new RegularUserDTO();

            RegularUserDTO[index].UserName = textBox1.Text;
            RegularUserBLL.Update(RegularUserDTO[index]);
        }
    }
}
