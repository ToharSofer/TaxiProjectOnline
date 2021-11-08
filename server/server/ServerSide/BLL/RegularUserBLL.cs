using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DataObject;

namespace BLL
{
    public class RegularUserBLL
    {
        #region FunctionAdd

        public static int Add(RegularUserDTO regularUser)
        {
            return RegularUserDAL.Add(Convert(regularUser));
        }

        #endregion

       public static RegularUserDTO GetByCode(RegularUserDTO existUser)
        {
            List<RegularUser> listRegularUsers = RegularUserDAL.GetAll();
            return Convert(listRegularUsers.First(x => x.UserName == existUser.UserName && x.UserId == existUser.UserId));
        }

        //התחברות משתמש
        public static RegularUserDTO GetById(RegularUserDTO existUser)
        {

            return RegularUserDAL.GetById(existUser.UserId);
        }
        #region FunctionGetAll

        public static List<RegularUserDTO> GetAll()
        {
            List<RegularUserDTO> listRegularUserDTO = new List<RegularUserDTO>();
            List<RegularUser> listRegularUsers = RegularUserDAL.GetAll();

            foreach (var item in listRegularUsers)
            {
                listRegularUserDTO.Add(Convert(item));
            }
            return listRegularUserDTO;
        }

        #endregion

        #region FunctionDelete

        public static bool Delete(int regularUser)
        {
           return RegularUserDAL.Delete(regularUser);
        }

        #endregion

        #region FunctionConvertDTO

        public static RegularUserDTO Convert(RegularUser regularUser)
        {
            RegularUserDTO regularUserDTO = new RegularUserDTO();
            regularUserDTO.UserId = regularUser.UserId;
            regularUserDTO.UserName = regularUser.UserName;
            regularUserDTO.CellphoneuserNumber = regularUser.CellphoneuserNumber;
            regularUserDTO.RecommendedDriverCode = (int)regularUser.RecommendedDriverCode;
            
            return regularUserDTO;
        }

        #endregion

        #region functinConvert

        public static RegularUser Convert(RegularUserDTO regularUserDTO)
        {
            RegularUser regularUser = new RegularUser();
            regularUser.UserName = regularUserDTO.UserName;
            regularUser.UserId = regularUserDTO.UserId;
            regularUser.CellphoneuserNumber = regularUserDTO.CellphoneuserNumber;
            regularUser.RecommendedDriverCode = regularUserDTO.RecommendedDriverCode;

            return regularUser;
        }
        

        #endregion

        #region FunctionUpdate

        public static bool Update(RegularUserDTO upRegularUser)
        {
            RegularUser regularUser = new RegularUser();
            regularUser = Convert(upRegularUser);

            return RegularUserDAL.Update(regularUser);
        }

        #endregion
    }
    
}
