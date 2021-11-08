using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataObject;
using DAL;

namespace BLL
{
    public class TaxiDriverBLL
    {
        static Dictionary<int, int> youGet = new Dictionary<int, int>();
        static  bool flag=true;
        public static System.Timers.Timer timer;

        public static void load()
        {
            if (flag)
            {
  List<TaxiDriver> listTaxiDruver = TaxiDriverDAL.GetAll();

            foreach (var item in listTaxiDruver)
            {
                youGet.Add(item.DriverId, 0);
            }
        }
            flag = false;
            }
          
        
     //   foreach (var item in listRegularUser)
	    //{
            
	    //}
            
        //GETALL
        //לעשות forEheac שם מילון ץהד 0
        public static List<RideDTO> arrTravel = new List<RideDTO>();

        #region FunctionAdd

        public int Add(TaxiDriverDTO taxiDriver)
        {
            return TaxiDriverDAL.Add(Convert(taxiDriver));
        }

        #endregion

         public RideDTO GetRide(int id)
         {
          RideDTO rr= arrTravel.Find(x => x.idDriver == id);
            if (rr != null)
            {
                  arrTravel.Remove(rr);
                    return rr;
            }

             return null;
         }

        public static bool SetRide(RideDTO ride)
        {
            int i = 0;
            load();
             
            while (i < 100000000000000000) { i++; }
                if (youGet[ride.idDriver] == 1)
                {
                    youGet[ride.idDriver] = 0;

                    return true;
                }
                else
                if (youGet[ride.idDriver] == 2)
                    youGet[ride.idDriver] = 0;

                return false;
           
        }
        
        public static void YouTake(int id,int take)
        {
            youGet[id] = take;
        }

        #region FunctionGetAll

        public List<TaxiDriverDTO> GetAll()
        {
            List<TaxiDriverDTO> listTaxiDriverDTO = new List<TaxiDriverDTO>();
            List<TaxiDriver> listTaxiDriver = TaxiDriverDAL.GetAll();

            foreach (var item in listTaxiDriver)
            {
                TaxiDriverDTO td = Convert(item);
                List<DriverReview> reviews = DriverReviewDAL.GetByDriverId(td.DriverId);
                reviews.ForEach(r =>
                {
                    DriverReviewBLL dr = new DriverReviewBLL();
                    td.Reviews.Add(dr.Convert(r));
                });
                listTaxiDriverDTO.Add(td);
            }
            return listTaxiDriverDTO;
        }

        #endregion

        #region FunctionDelete

        public bool Delete(int taxiDriver)
        {
            return TaxiDriverDAL.Delete(taxiDriver);
        }
       
        #endregion

        #region FunctionConvertDTO

        public TaxiDriverDTO Convert(TaxiDriver newTaxiDriver)
        {
            TaxiDriverDTO taxiDriverDTO = new TaxiDriverDTO();
            taxiDriverDTO.DriverId = newTaxiDriver.DriverId;
            taxiDriverDTO.DriverName = newTaxiDriver.DriverName;
            taxiDriverDTO.PelephoneDriverNumber = newTaxiDriver.PelephoneDriverNumber;
            taxiDriverDTO.VehicleTaxiCode = newTaxiDriver.VehicleTaxiCode;
            taxiDriverDTO.CurrentLocationLat = newTaxiDriver.CurrentLocationLat;
            taxiDriverDTO.CurrentLocationLng = newTaxiDriver.CurrentLocationLng;
            taxiDriverDTO.StationCode = newTaxiDriver.StationCode!=null?System.Convert.ToInt32(newTaxiDriver.StationCode):0;
            taxiDriverDTO.ImageDriver = newTaxiDriver.ImageDriver;
            taxiDriverDTO.Prioritys = newTaxiDriver.Prioritys;

            return taxiDriverDTO;
        }

        #endregion

        #region functinConvert

        public TaxiDriver Convert(TaxiDriverDTO newTaxiDriverDTO)
        {
            TaxiDriver taxiDriver = new TaxiDriver();
            
            
                taxiDriver.DriverId = newTaxiDriverDTO.DriverId;
                taxiDriver.DriverName = newTaxiDriverDTO.DriverName;
                taxiDriver.PelephoneDriverNumber = newTaxiDriverDTO.PelephoneDriverNumber;
                taxiDriver.VehicleTaxiCode = newTaxiDriverDTO.VehicleTaxiCode;
                taxiDriver.CurrentLocationLat = newTaxiDriverDTO.CurrentLocationLat;
                taxiDriver.CurrentLocationLng = newTaxiDriverDTO.CurrentLocationLng;
                taxiDriver.ImageDriver = newTaxiDriverDTO.ImageDriver;
                taxiDriver.Prioritys = newTaxiDriverDTO.Prioritys;
                taxiDriver.StationCode = newTaxiDriverDTO.StationCode;
            
           
                return taxiDriver;
            
           
            
        }

        #endregion

        #region FunctionUpdate

        public bool Update(TaxiDriverDTO upTaxiDriverDTO)
        {
            TaxiDriver taxiDriver = new TaxiDriver();
            taxiDriver = Convert(upTaxiDriverDTO);

            return TaxiDriverDAL.Update(taxiDriver);
        }

        #endregion
    }
}
