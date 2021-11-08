using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class TaxiDAL
    {
        #region GetAll

        public static List<Taxi> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<Taxi> listTaxis = context.Taxis.ToList();
                return listTaxis;
            }

        }

        #endregion

        #region Get

        //public static List<Taxi> Get()
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        return context.Taxis.ToList();
        //    }

        //}

        #endregion

        #region Add

        public static int Add(Taxi taxi)
        {
            using (var context = new Database1Entities())
            {
                context.Taxis.Add(taxi);              
             
                context.SaveChanges();

                int code = 0;

                foreach (Taxi item in context.Taxis)
                {
                    code = item.VehicleTaxiCode;
                }
                return code;

            }

        }

        #endregion

        #region Delete

        public static bool Delete(int code)
        {
            using (var context = new Database1Entities())
            {
                try
                {
                    Taxi toDel = context.Taxis.FirstOrDefault(x => x.VehicleTaxiCode == code);
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

        #region Update

        public static bool Update(Taxi taxi)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    Taxi old = context.Taxis.FirstOrDefault(x => x.VehicleTaxiCode == taxi.VehicleTaxiCode);
                    if (old != null)
                    {
                        old.StationCode = taxi.StationCode;
                        old.NumberOfSeats = taxi.NumberOfSeats;
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
