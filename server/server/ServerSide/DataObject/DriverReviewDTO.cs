using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
    public class DriverReviewDTO
    {
      

      
        #region prop

        public int ReviewCode { get; set; }
        public string Review { get; set; }
        public int DriverReviewCode { get; set; }
        public int UserId { get; set; }

        #endregion
    }
}
