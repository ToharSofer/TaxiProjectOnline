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
    [RoutePrefix("api/Taxi")]
    public class TaxiController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<TaxiDTO> GetAll()
        {
            TaxiBLL taxiBLL = new TaxiBLL();
            return taxiBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

        // POST: api/Taxi


        //[Route("post/{newTaxi}")]
        //[HttpPost]

        //public int Post(TaxiDTO newTaxi)
        //{
        //    TaxiBLL taxiBLL = new TaxiBLL();
        //    return taxiBLL.Add(newTaxi);
        //}


        
        [HttpPost]
        [Route("Post")]
        public int Post(TaxiDTO newTaxi)
        {
            TaxiBLL taxiBLL = new TaxiBLL();
            return taxiBLL.Add(newTaxi);
        }




        // PUT: api/Taxi/5
        [Route("{upTaxi}")]
        [HttpPut]

        public bool Put(TaxiDTO upTaxi)
        {
            TaxiBLL taxiBLL = new TaxiBLL();

            return taxiBLL.Update(upTaxi);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{code}")]
        [HttpDelete]

        public bool Delete(int code)
        {
            TaxiBLL taxiBLL = new TaxiBLL();

            return taxiBLL.Delete(code);
        }

        public void Options()
        {

        }
    }
}
