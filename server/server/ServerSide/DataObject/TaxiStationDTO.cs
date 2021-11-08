using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
    public class TaxiStationDTO
    {
        #region prop

        public int StationCode { get; set; }
        public string StationName { get; set; }
        public string CityStationLocation { get; set; }
        public int NumbrOfTaxis { get; set; }
        public double PricePerKilometer { get; set; }

        #endregion
    }
}
