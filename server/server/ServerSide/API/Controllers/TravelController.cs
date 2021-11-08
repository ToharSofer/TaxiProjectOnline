using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BLL;
using DataObject;

namespace API.Controllers
{
    [RoutePrefix("api/Travel")]
    public class TravelController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<TravelDTO> GetAll()
        {
            TravelBLL travelBLL = new TravelBLL();
            return travelBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

        // POST: api/Taxi
        [Route("{newTravel}")]
        [HttpPost]

        public int Post(TravelDTO newTravel)
        {
            TravelBLL travelBLL = new TravelBLL();
            return travelBLL.Add(newTravel);
        }

        // PUT: api/Taxi/5
        [Route("upTravel")]
        [HttpPut]

        public bool Put(TravelDTO upTravel)
        {
            TravelBLL travelBLL = new TravelBLL();

            return travelBLL.Update(upTravel);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{code}")]
        [HttpDelete]

        public bool Delete(int code)
        {
            TravelBLL travelBLL = new TravelBLL();

            return travelBLL.Delete(code);
        }
    }
}
