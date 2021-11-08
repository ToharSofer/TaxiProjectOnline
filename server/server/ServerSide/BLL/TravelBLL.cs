using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataObject;
using DAL;

namespace BLL
{
    public class TravelBLL
    {
        #region FunctionAdd
       
        public int Add(TravelDTO travelDTO)
        {
            return TravelDAL.Add(Convert(travelDTO));
        }

        #endregion

        #region FunctionGetAll

        public List<TravelDTO> GetAll()
        {
            List<TravelDTO> listTravelDTO = new List<TravelDTO>();
            List<Travel> listTravel = TravelDAL.GetAll();

            foreach (var item in listTravel)
            {
                listTravelDTO.Add(Convert(item));
            }
            return listTravelDTO;
        }

        #endregion

        #region FunctionDelete

        public bool Delete(int travel)
        {
            return TravelDAL.Delete(travel);
        }

        #endregion

        #region FunctionConvertDTO

        public TravelDTO Convert(Travel travel)
        {
            TravelDTO travelDTO = new TravelDTO();
            travelDTO.TravelCode = travel.TravelCode;
            travelDTO.UserId = travel.UserId;
            travelDTO.StartingPointLat = travel.StartingPointLat;
            travelDTO.StartingPointLng = travel.StartingPointLng;
            travelDTO.DestinatiPnpointLat = travel.DestinatiPnpointLat;
            travelDTO.DestinatiPnpointLng = travel.DestinatiPnpointLng;
            travelDTO.DepartureTime =  travel.DepartureTime;
            travelDTO.FixedPrice = travel.FixedPrice;
            travelDTO.DayInTheWeek = travel.DayInTheWeek;
            travelDTO.PriorityTime =travel.PriorityTime!=null?System.Convert.ToBoolean(travel.PriorityTime):false;
            travelDTO.PriorityPrice = travel.PriorityPrice != null ? System.Convert.ToBoolean(travel.PriorityPrice) : false;
            travelDTO.PriorityDriverCode = (int)travel.PriorityDriverCode;

            return travelDTO;
        }

        #endregion

        #region functinConvert

        public Travel Convert(TravelDTO travelDTO)
        {
            Travel travel = new Travel();
            travel.TravelCode = travelDTO.TravelCode; 
            travel.UserId = travelDTO.UserId;
            travel.StartingPointLat = travelDTO.StartingPointLat;
            travel.StartingPointLng = travelDTO.StartingPointLng;
            travel.DestinatiPnpointLat = travelDTO.DestinatiPnpointLat;
            travel.DestinatiPnpointLng = travelDTO.DestinatiPnpointLng;
            travel.DepartureTime = travelDTO.DepartureTime;
            travel.FixedPrice = travelDTO.FixedPrice;
            travel.DayInTheWeek = travelDTO.DayInTheWeek;
            travel.PriorityTime = travelDTO.PriorityTime;
            travel.PriorityPrice = travelDTO.PriorityPrice;
            travel.PriorityDriverCode = travelDTO.PriorityDriverCode;

            return travel;
        }

        #endregion
        #region FunctionUpdate

        public bool Update(TravelDTO upTravelDTO)
        {
            Travel travel = new Travel();
            travel = Convert(upTravelDTO);

            return TravelDAL.Update(travel);
        }

        #endregion
    }
}
