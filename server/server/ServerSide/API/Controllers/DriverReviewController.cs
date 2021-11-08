using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataObject;
using BLL;

namespace API.Controllers
{
    [RoutePrefix("api/DriverReview")]
    public class DriverReviewController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<DriverReviewDTO> GetAll()
        {
            DriverReviewBLL driverReviewBLL = new DriverReviewBLL();
            return driverReviewBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

        // POST: api/Taxi
        [Route("{newDriverReview}")]
        [HttpPost]
        public int Post(DriverReviewDTO newDriverReview)
        {
            DriverReviewBLL driverReviewBLL = new DriverReviewBLL();
            return driverReviewBLL.Add(newDriverReview);
        }

        // PUT: api/Taxi/5
        [Route("{upDriverReview}")]
        [HttpPut]

        public bool Put(DriverReviewDTO upDriverReview)
        {
            DriverReviewBLL driverReviewBLL = new DriverReviewBLL();

            return driverReviewBLL.Update(upDriverReview);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{code}")]
        [HttpDelete]

        public bool Delete(int code)
        {
            DriverReviewBLL driverReviewBLL = new DriverReviewBLL();

            return driverReviewBLL.Delete(code);
        }

    }
}
