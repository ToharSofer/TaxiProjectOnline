using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DAL
{
    public class TravelDAL
    {

        #region FuncGetAll

        public static List<Travel> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<Travel> listTravels = context.Travels.ToList();
                return listTravels;
            }

        }

        #endregion

        #region FuncGet

        //public static List<Travel> Get()
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        return context.Travels.ToList();
        //    }

        //}

        #endregion

        #region FuncAdd

        public static int Add(Travel travel)
        {
            using (var context = new Database1Entities())
            {
                context.Travels.Add(travel );
                context.SaveChanges();

                int code = 0;

                foreach (Travel item in context.Travels)
                {
                    code = item.TravelCode;
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
                    Travel toDel = context.Travels.FirstOrDefault(x => x.TravelCode == code);
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

        public static bool Update(Travel travel)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    Travel old = context.Travels.FirstOrDefault(x => x.TravelCode == travel.TravelCode);
                    if (old != null)
                    {
                        old.UserId = travel.UserId;
                        old.StartingPointLat = travel.StartingPointLat;
                        old.StartingPointLng = travel.StartingPointLng;
                        old.StartingPointLng = travel.StartingPointLng;
                        old.DestinatiPnpointLat = travel.DestinatiPnpointLat;
                        old.DestinatiPnpointLng = travel.DestinatiPnpointLng;
                        old.FixedPrice = travel.FixedPrice;
                        old.DayInTheWeek = travel.DayInTheWeek;
                        old.PriorityTime = travel.PriorityTime;
                        old.PriorityPrice = travel.PriorityPrice;
                        old.PriorityDriverCode = travel.PriorityDriverCode;
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
