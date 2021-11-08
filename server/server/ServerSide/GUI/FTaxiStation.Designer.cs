
namespace GUI
{
    partial class FTaxiStation
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.StationNameBtn = new System.Windows.Forms.Button();
            this.StationNameL = new System.Windows.Forms.Label();
            this.StationNameTB = new System.Windows.Forms.TextBox();
            this.NumbrOfTaxisL = new System.Windows.Forms.Label();
            this.NumbrOfTaxisTB = new System.Windows.Forms.TextBox();
            this.CityStationLocationTB = new System.Windows.Forms.TextBox();
            this.PricePerKilometerTB = new System.Windows.Forms.TextBox();
            this.CityStationLocationBtn = new System.Windows.Forms.Button();
            this.PricePerKilometerL = new System.Windows.Forms.Label();
            this.CityStationLocationL = new System.Windows.Forms.Label();
            this.NumbrOfTaxisBtn = new System.Windows.Forms.Button();
            this.PricePerKilometerBtn = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // StationNameBtn
            // 
            this.StationNameBtn.Location = new System.Drawing.Point(592, 58);
            this.StationNameBtn.Name = "StationNameBtn";
            this.StationNameBtn.Size = new System.Drawing.Size(196, 23);
            this.StationNameBtn.TabIndex = 0;
            this.StationNameBtn.Text = "הוספה";
            this.StationNameBtn.UseVisualStyleBackColor = true;
            this.StationNameBtn.Click += new System.EventHandler(this.StationNameBtn_Click);
            // 
            // StationNameL
            // 
            this.StationNameL.AutoSize = true;
            this.StationNameL.Location = new System.Drawing.Point(979, 58);
            this.StationNameL.Name = "StationNameL";
            this.StationNameL.Size = new System.Drawing.Size(90, 17);
            this.StationNameL.TabIndex = 1;
            this.StationNameL.Text = "הכנס שם תחנה";
            this.StationNameL.Click += new System.EventHandler(this.label1_Click);
            // 
            // StationNameTB
            // 
            this.StationNameTB.Location = new System.Drawing.Point(849, 58);
            this.StationNameTB.Name = "StationNameTB";
            this.StationNameTB.Size = new System.Drawing.Size(100, 22);
            this.StationNameTB.TabIndex = 2;
            // 
            // NumbrOfTaxisL
            // 
            this.NumbrOfTaxisL.AutoSize = true;
            this.NumbrOfTaxisL.Location = new System.Drawing.Point(979, 231);
            this.NumbrOfTaxisL.Name = "NumbrOfTaxisL";
            this.NumbrOfTaxisL.Size = new System.Drawing.Size(108, 17);
            this.NumbrOfTaxisL.TabIndex = 3;
            this.NumbrOfTaxisL.Text = "הכנס מספר מוניות";
            // 
            // NumbrOfTaxisTB
            // 
            this.NumbrOfTaxisTB.Location = new System.Drawing.Point(849, 226);
            this.NumbrOfTaxisTB.Name = "NumbrOfTaxisTB";
            this.NumbrOfTaxisTB.Size = new System.Drawing.Size(100, 22);
            this.NumbrOfTaxisTB.TabIndex = 5;
            // 
            // CityStationLocationTB
            // 
            this.CityStationLocationTB.Location = new System.Drawing.Point(849, 141);
            this.CityStationLocationTB.Name = "CityStationLocationTB";
            this.CityStationLocationTB.Size = new System.Drawing.Size(100, 22);
            this.CityStationLocationTB.TabIndex = 6;
            // 
            // PricePerKilometerTB
            // 
            this.PricePerKilometerTB.Location = new System.Drawing.Point(849, 309);
            this.PricePerKilometerTB.Name = "PricePerKilometerTB";
            this.PricePerKilometerTB.Size = new System.Drawing.Size(100, 22);
            this.PricePerKilometerTB.TabIndex = 7;
            // 
            // CityStationLocationBtn
            // 
            this.CityStationLocationBtn.Location = new System.Drawing.Point(592, 146);
            this.CityStationLocationBtn.Name = "CityStationLocationBtn";
            this.CityStationLocationBtn.Size = new System.Drawing.Size(196, 23);
            this.CityStationLocationBtn.TabIndex = 8;
            this.CityStationLocationBtn.Text = "הוספה";
            this.CityStationLocationBtn.UseVisualStyleBackColor = true;
            this.CityStationLocationBtn.Click += new System.EventHandler(this.CityStationLocationBtn_Click);
            // 
            // PricePerKilometerL
            // 
            this.PricePerKilometerL.AutoSize = true;
            this.PricePerKilometerL.Location = new System.Drawing.Point(962, 311);
            this.PricePerKilometerL.Name = "PricePerKilometerL";
            this.PricePerKilometerL.Size = new System.Drawing.Size(124, 17);
            this.PricePerKilometerL.TabIndex = 10;
            this.PricePerKilometerL.Text = "הכנס מחיר לקילומטר";
            this.PricePerKilometerL.Click += new System.EventHandler(this.label3_Click);
            // 
            // CityStationLocationL
            // 
            this.CityStationLocationL.AutoSize = true;
            this.CityStationLocationL.Location = new System.Drawing.Point(977, 146);
            this.CityStationLocationL.Name = "CityStationLocationL";
            this.CityStationLocationL.Size = new System.Drawing.Size(92, 17);
            this.CityStationLocationL.TabIndex = 11;
            this.CityStationLocationL.Text = "הכנס עיר תחנה";
            this.CityStationLocationL.Click += new System.EventHandler(this.CityStationLocationL_Click);
            // 
            // NumbrOfTaxisBtn
            // 
            this.NumbrOfTaxisBtn.Location = new System.Drawing.Point(592, 231);
            this.NumbrOfTaxisBtn.Name = "NumbrOfTaxisBtn";
            this.NumbrOfTaxisBtn.Size = new System.Drawing.Size(196, 23);
            this.NumbrOfTaxisBtn.TabIndex = 13;
            this.NumbrOfTaxisBtn.Text = "הוספה";
            this.NumbrOfTaxisBtn.UseVisualStyleBackColor = true;
            this.NumbrOfTaxisBtn.Click += new System.EventHandler(this.button2_Click);
            // 
            // PricePerKilometerBtn
            // 
            this.PricePerKilometerBtn.Location = new System.Drawing.Point(592, 314);
            this.PricePerKilometerBtn.Name = "PricePerKilometerBtn";
            this.PricePerKilometerBtn.Size = new System.Drawing.Size(196, 23);
            this.PricePerKilometerBtn.TabIndex = 14;
            this.PricePerKilometerBtn.Text = "הוספה";
            this.PricePerKilometerBtn.UseVisualStyleBackColor = true;
            this.PricePerKilometerBtn.Click += new System.EventHandler(this.button3_Click);
            // 
            // FTaxiStation
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1098, 494);
            this.Controls.Add(this.PricePerKilometerBtn);
            this.Controls.Add(this.NumbrOfTaxisBtn);
            this.Controls.Add(this.CityStationLocationL);
            this.Controls.Add(this.PricePerKilometerL);
            this.Controls.Add(this.CityStationLocationBtn);
            this.Controls.Add(this.PricePerKilometerTB);
            this.Controls.Add(this.CityStationLocationTB);
            this.Controls.Add(this.NumbrOfTaxisTB);
            this.Controls.Add(this.NumbrOfTaxisL);
            this.Controls.Add(this.StationNameTB);
            this.Controls.Add(this.StationNameL);
            this.Controls.Add(this.StationNameBtn);
            this.Name = "FTaxiStation";
            this.Text = "FTaxiStation";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button StationNameBtn;
        private System.Windows.Forms.Label StationNameL;
        private System.Windows.Forms.TextBox StationNameTB;
        private System.Windows.Forms.Label NumbrOfTaxisL;
        private System.Windows.Forms.TextBox NumbrOfTaxisTB;
        private System.Windows.Forms.TextBox CityStationLocationTB;
        private System.Windows.Forms.TextBox PricePerKilometerTB;
        private System.Windows.Forms.Button CityStationLocationBtn;
        private System.Windows.Forms.Label PricePerKilometerL;
        private System.Windows.Forms.Label CityStationLocationL;
        private System.Windows.Forms.Button NumbrOfTaxisBtn;
        private System.Windows.Forms.Button PricePerKilometerBtn;
    }
}

