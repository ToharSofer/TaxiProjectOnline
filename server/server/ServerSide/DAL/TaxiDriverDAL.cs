using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataObject;


namespace DAL
{
    public class TaxiDriverDAL
    {
        #region FuncGetAll

        public static List<TaxiDriver> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<TaxiDriver> listTaxiDrivers = context.TaxiDrivers.ToList();
                
                return listTaxiDrivers;
            }

        }

        #endregion

        #region FuncGet

        //public static List<TaxiDriver> Get()
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        return context.TaxiDrivers.ToList();
        //    }

        //}

        #endregion

        #region FuncAdd

        public static int Add(TaxiDriver taxiDriver)
        {
            using (var context = new Database1Entities())
            {
                context.TaxiDrivers.Add(taxiDriver);
                context.SaveChanges();

                int code = 0;

                foreach (TaxiDriver item in context.TaxiDrivers)
                {
                    code = item.DriverId;
                }
                return code;

            }

        }

        #endregion

        #region FuncDelete

        public static bool Delete(int code)
        {
            using (var context = new Database1Entities())
            {
                try
                {
                    TaxiDriver toDel = context.TaxiDrivers.FirstOrDefault(x => x.DriverId == code);
                    if (toDel != null)
                    {
                        context.Entry(toDel).State = System.Data.Entity.EntityState.Deleted;
                        context.SaveChanges();
                    }
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        #endregion

        #region FuncUpdate

        public static bool Update(TaxiDriver taxiDriver)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    TaxiDriver old = context.TaxiDrivers.FirstOrDefault(x => x.DriverId == taxiDriver.DriverId);
                    if (old != null)
                    {
                        old.DriverName = taxiDriver.DriverName;
                        old.PelephoneDriverNumber = taxiDriver.PelephoneDriverNumber;
                        old.VehicleTaxiCode = taxiDriver.VehicleTaxiCode;
                        old.CurrentLocationLat = taxiDriver.CurrentLocationLat;
                        old.CurrentLocationLng = taxiDriver.CurrentLocationLng;
                        old.ImageDriver = taxiDriver.ImageDriver;
                        old.Prioritys = taxiDriver.Prioritys;
                        old.StationCode = taxiDriver.StationCode;
                        context.SaveChanges();
                    }
                }
                return true;
            }
            catch
            {
                return false;
            }
        }

        #endregion

       
    }
}