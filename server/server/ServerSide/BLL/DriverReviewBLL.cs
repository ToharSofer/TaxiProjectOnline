using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DataObject;

namespace BLL
{
    public class DriverReviewBLL
    {
        public DriverReviewBLL()
        {

        }
       
       
        #region FunctionAdd
        //שיננו היום
        public int Add(DriverReviewDTO driverReviewDTO)
        {
           return DriverReviewDAL.Add(Convert(driverReviewDTO));
        }

        #endregion

        #region FunctionGetAll

        public List<DriverReviewDTO> GetAll()
        {
            List<DriverReviewDTO> listDriverReviewDTO = new List<DriverReviewDTO>();
            List<DriverReview> listDriverReview = DriverReviewDAL.GetAll();

            foreach (var item in listDriverReview)
            {
                listDriverReviewDTO.Add(Convert(item));
            }
            return listDriverReviewDTO;
        }

        #endregion

        #region FunctionDelete

        public bool Delete(int driverReview)
        {
           return DriverReviewDAL.Delete(driverReview);
        }

        #endregion

        #region FunctionConvertDTO

        public DriverReviewDTO Convert(DriverReview driverReview)
        {
            DriverReviewDTO driverReviewDTO = new DriverReviewDTO();
            driverReviewDTO.ReviewCode = driverReview.ReviewCode;
            driverReviewDTO.Review = driverReview.Review;
            driverReviewDTO.DriverReviewCode = driverReview.DriverReviewCode;
            driverReviewDTO.UserId = driverReview.UserId;
           
            return driverReviewDTO;
        }

        #endregion

        #region functinConvert

        public DriverReview Convert(DriverReviewDTO driverReviewDTO)
        {
            DriverReview driverReview = new DriverReview();
            driverReview.ReviewCode = driverReviewDTO.ReviewCode;
            driverReview.Review = driverReviewDTO.Review;
            driverReview.DriverReviewCode = driverReviewDTO.DriverReviewCode;
            driverReview.UserId = driverReviewDTO.UserId;

            return driverReview;
        }

        #endregion
        #region FunctionUpdate

        public bool Update(DriverReviewDTO upDriverReview)
        {
            DriverReview driverReview = new DriverReview();
            driverReview = Convert(upDriverReview);

            return DriverReviewDAL.Update(driverReview);
        }

        #endregion
    }
}
