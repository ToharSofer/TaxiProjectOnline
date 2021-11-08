using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataObject;



namespace DAL
{
    public class RegularUserDAL
    {
        #region GetAll

        public static List<RegularUser> GetAll()
        {
            using (var context = new Database1Entities())
            {
                List<RegularUser> listRegularUsers = context.RegularUsers.ToList();
                return listRegularUsers; 
            }

        }

        #endregion

        #region GetById

        //public static RegularUser GetById(int id)
        //{
        //    using (var context = new Database1Entities())
        //    {
        //        if (context.RegularUsers.Where(a => a.UserId == id).ToList()[0] == null)
        //        {
        //            return null;
        //        }

        //        return context.RegularUsers.Where(a => a.UserId == id).ToList()[0];
        //    }
        //}

        #endregion

        #region Add

        public static int Add(RegularUser regularUser)
        {


            using (var context = new Database1Entities())
            {
                context.RegularUsers.Add(regularUser);
                context.SaveChanges();

                int code = 0;

                foreach (RegularUser item in context.RegularUsers)
                {
                    code = item.UserId;
                }

                return code;

            }
            
             
        }

        #endregion

        #region GetById
        //שליפה ע"י נתון

        public static RegularUserDTO GetById(int id)
        {
            using (var context = new Database1Entities())
            {
                if (context.RegularUsers.FirstOrDefault(a => a.UserId == id) == null)
                {
                    return null;
                }
                RegularUserDTO user = new RegularUserDTO();
                RegularUser u = context.RegularUsers.FirstOrDefault(a => a.UserId == id);
                user.UserId = u.UserId;
                user.UserName = u.UserName;
                user.CellphoneuserNumber = u.CellphoneuserNumber;
                user.CellphoneuserNumber = u.RecommendedDriverCode.ToString(); 
                return user;
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
                    RegularUser toDel = context.RegularUsers.FirstOrDefault(x => x.UserId == code);
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

        public static bool Update(RegularUser regularUser)
        {
            try
            {
                using (var context = new Database1Entities())
                {
                    RegularUser old = context.RegularUsers.FirstOrDefault(x => x.UserId == regularUser.UserId);
                    if (old != null)
                    {
                        old.UserName = regularUser.UserName;
                        old.CellphoneuserNumber = regularUser.CellphoneuserNumber;
                        old.RecommendedDriverCode = regularUser.RecommendedDriverCode;
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
