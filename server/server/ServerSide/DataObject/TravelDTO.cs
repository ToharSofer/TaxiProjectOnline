using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
    public class TravelDTO
    {
        #region prop

        public int TravelCode { get; set; }
        public int UserId { get; set; }
        public double StartingPointLat { get; set; }
        public double StartingPointLng { get; set; }
        public double DestinatiPnpointLat { get; set; }
        public double DestinatiPnpointLng { get; set; }
        public TimeSpan DepartureTime { get; set; }
        public double FixedPrice { get; set; }
        public int DayInTheWeek { get; set; }
        public Boolean PriorityTime { get; set; }
        public int PriorityDriverCode { get; set; }
        public Boolean PriorityPrice { get; set; }


        #endregion
    }
}
