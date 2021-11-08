using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DriverReviewDAL
    {
        #region GetAll

        public static List<DriverReview> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<DriverReview> listDriverReviews = context.DriverReviews.ToList();
                return listDriverReviews;
            }

        }

        public static List<DriverReview> GetByDriverId(int driverId)
        {
            using(var context = new Database1Entities())
            {
                List<DriverReview> list = context.DriverReviews.Where(d => d.DriverReviewCode == driverId).ToList();
                return list;
            }
        }

        #endregion

        #region Get

        //public static List<DriverReview> Get()
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        return context.DriverReviews.ToList();
        //    }

        //}

        #endregion

        #region Add

        public static int Add(DriverReview driverReview)
        {
            using (var context= new Database1Entities())
            {
                context.DriverReviews.Add(driverReview);
                context.SaveChanges();

                int code = 0;

                foreach(DriverReview item in context.DriverReviews)
                {
                    code = item.ReviewCode;
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
                    DriverReview toDel = context.DriverReviews.FirstOrDefault(x => x.ReviewCode==code );
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

        public static bool Update(DriverReview driverReview)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    DriverReview old = context.DriverReviews.FirstOrDefault(x => x.ReviewCode == driverReview.ReviewCode );
                    if(old != null)
                    {
                        old.Review = driverReview.Review;
                        old.DriverReviewCode=driverReview.DriverReviewCode;
                        old.UserId = driverReview.UserId;
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
