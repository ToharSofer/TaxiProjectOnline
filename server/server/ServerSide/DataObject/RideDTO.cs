using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataObject
{
    
    public class RideDTO
    {
        public int idDriver { get; set; }
        public string nameStart { get; set; }
        public string nameEnd { get; set; }
        public RideDTO(int idDriver, string nameStart, string nameEnd)
        {
            this.idDriver = idDriver;
            this.nameStart = nameStart;
            this.nameEnd = nameEnd;
        }
             }
}
