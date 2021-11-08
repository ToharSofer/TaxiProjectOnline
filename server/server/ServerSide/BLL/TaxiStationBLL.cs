using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DataObject;

namespace BLL
{
    public class TaxiStationBLL
    {
        #region FunctionAdd
       
        public int Add(TaxiStationDTO taxiStation)
        {
            return TaxiStationDAL.Add(Convert(taxiStation));
        }

        #endregion

        #region FunctionGetAll

        public List<TaxiStationDTO> GetAll()
        {
            List<TaxiStationDTO> listTaxiStationDTO = new List<TaxiStationDTO>();
            List<TaxiStation> listTaxiStations = TaxiStationDAL.GetAll();

            foreach (var item in listTaxiStations)
            {
                listTaxiStationDTO.Add(Convert(item));
            }
            return listTaxiStationDTO;
        }

        #endregion

        #region FunctionDelete

        public bool Delete(int taxiStation)
        {
            return TaxiStationDAL.Delete(taxiStation);
        }

        #endregion

        #region FunctionConvertDTO

        public TaxiStationDTO Convert(TaxiStation upTaxiStation)
        {
            TaxiStationDTO taxiStationDTO = new TaxiStationDTO();
            taxiStationDTO.StationCode = upTaxiStation.StationCode;
            taxiStationDTO.StationName = upTaxiStation.StationName;
            taxiStationDTO.CityStationLocation = upTaxiStation.CityStationLocation;
            taxiStationDTO.NumbrOfTaxis = upTaxiStation.NumbrOfTaxis;
            taxiStationDTO.PricePerKilometer = upTaxiStation.PricePerKilometer;

            return taxiStationDTO;
        }

        #endregion

        #region functinConvert

        public TaxiStation Convert(TaxiStationDTO taxiStationDTO)
        {
            TaxiStation taxiStation = new TaxiStation();
            taxiStation.StationCode = taxiStationDTO.StationCode;
            taxiStation.StationName = taxiStationDTO.StationName;
            taxiStation.CityStationLocation = taxiStationDTO.CityStationLocation;
            taxiStation.NumbrOfTaxis = taxiStationDTO.NumbrOfTaxis;
            taxiStation.PricePerKilometer = taxiStationDTO.PricePerKilometer;

            return taxiStation;
        }

        #endregion
        #region FunctionUpdate

        public bool Update(TaxiStationDTO upTaxiStation)
        {
            TaxiStation taxiStation = new TaxiStation();
            taxiStation = Convert(upTaxiStation);

            return TaxiStationDAL.Update(taxiStation);
        }

        #endregion
    }
}
