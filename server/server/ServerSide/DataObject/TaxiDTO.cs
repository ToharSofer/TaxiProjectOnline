using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
     public class TaxiDTO
    {
        #region prop

        public int VehicleTaxiCode { get; set; }
        public int StationCode { get; set; }
        public int NumberOfSeats { get; set; }

        #endregion
    }
}
