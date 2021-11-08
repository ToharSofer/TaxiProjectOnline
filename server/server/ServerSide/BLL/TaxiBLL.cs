using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DataObject;

namespace BLL
{
    public class TaxiBLL
    {
        TaxiDAL TaxiDAL = new TaxiDAL();

        #region FunctionAdd

        public int Add(TaxiDTO taxi)
        {
            Taxi newTaxi = new Taxi();
            newTaxi = Convert(taxi);
            return TaxiDAL.Add(newTaxi );
        }

        #endregion

        #region FunctionGetAll

        public List<TaxiDTO> GetAll()
        {
            List<TaxiDTO> listTaxiDTO = new List<TaxiDTO>();
            List<Taxi> listTaxis = TaxiDAL.GetAll();

            foreach (var item in listTaxis)
            {
                listTaxiDTO.Add(Convert(item));
            }
            return listTaxiDTO;
        }

        #endregion

        #region FunctionDelete

        public bool Delete(int taxi)
        {
            return TaxiDAL.Delete(taxi);
        }

        #endregion

        #region FunctionConvertDTO

        public TaxiDTO Convert(Taxi taxi)
        {
            TaxiDTO taxiDTO = new TaxiDTO();
            taxiDTO.VehicleTaxiCode = taxi.VehicleTaxiCode;
            taxiDTO.StationCode = taxi.StationCode;
            taxiDTO.NumberOfSeats = taxi.NumberOfSeats;
         
            return taxiDTO;
        }

        #endregion

        #region functinConvert

        public Taxi Convert(TaxiDTO taxiDTO)
        {
           
            Taxi taxi = new Taxi();
            taxi.VehicleTaxiCode = taxiDTO.VehicleTaxiCode;
            taxi.StationCode = taxiDTO.StationCode;
            taxi.NumberOfSeats = taxiDTO.NumberOfSeats;

            return taxi;
        }

        #endregion

        #region FunctionUpdate

        public bool Update(TaxiDTO upTaxi)
        {
            Taxi taxi = new Taxi();
            taxi = Convert(upTaxi);

            return TaxiDAL.Update(taxi);
        }

        #endregion
    }
}
