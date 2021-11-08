using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
    public class TaxiDriverDTO
    {
        #region prop

        public int DriverId { get; set; }
        public string DriverName { get; set; }
        public string PelephoneDriverNumber { get; set; }
        public int VehicleTaxiCode { get; set; }
        public double CurrentLocationLat { get; set; }
        public double CurrentLocationLng { get; set; }
        public string ImageDriver { get; set; }
        public int Prioritys { get; set; }
        public int StationCode { get; set; }

        public List<DriverReviewDTO> Reviews { get; set; } = new List<DriverReviewDTO>();


        #endregion

        //public TaxiDriverDTO()
        //{
        //    Prioritys++;
        //}
    }
}
