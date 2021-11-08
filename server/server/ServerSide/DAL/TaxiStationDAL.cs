using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DAL
{
    public class TaxiStationDAL
    {
        #region FuncGetAll

        public static List<TaxiStation> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<TaxiStation>listTaxiStations = context.TaxiStations.ToList();
                return listTaxiStations;
            }

        }

        #endregion

        #region FuncGet

        //public static List<TaxiStation> Get()
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        return context.TaxiStations.ToList();
        //    }

        //}

        #endregion

        #region FuncAdd

        public static int Add(TaxiStation taxiStation)
        {
            using (var context = new Database1Entities())
            {
                context.TaxiStations.Add(taxiStation);
                context.SaveChanges();

                int code = 0;

                foreach (TaxiStation item in context.TaxiStations)
                {
                    code = item.StationCode;
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
                    TaxiStation toDel = context.TaxiStations.FirstOrDefault(x => x.StationCode == code);
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

        public static bool Update(TaxiStation taxiStation)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    TaxiStation old = context.TaxiStations.FirstOrDefault(x => x.StationCode == taxiStation.StationCode);
                    if (old != null)
                    {
                        old.StationName = taxiStation.StationName;
                        old.CityStationLocation = taxiStation.CityStationLocation;
                        old.NumbrOfTaxis = taxiStation.NumbrOfTaxis;
                        old.PricePerKilometer = taxiStation.PricePerKilometer;
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
