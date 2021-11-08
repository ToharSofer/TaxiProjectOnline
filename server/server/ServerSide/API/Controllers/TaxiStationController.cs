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
    [RoutePrefix("api/TaxiStation")]
    public class TaxiStationController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<TaxiStationDTO> GetAll()
        {
            TaxiStationBLL taxiStationBLL = new TaxiStationBLL();
            return taxiStationBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

        // POST: api/Taxi
        [Route("{newTaxiStation}")]
        [HttpPost]

        public int Post(TaxiStationDTO newTaxiStation)
        {
            TaxiStationBLL taxiStationBLL = new TaxiStationBLL();
            return taxiStationBLL.Add(newTaxiStation);
        }

        // PUT: api/Taxi/5
        [Route("upTaxiStation")]
        [HttpPut]

        public bool Put(TaxiStationDTO upTaxiStation)
        {
            TaxiStationBLL taxiStationBLL = new TaxiStationBLL();

            return taxiStationBLL.Update(upTaxiStation);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{code}")]
        [HttpDelete]

        public bool Delete(int code)
        {
            TaxiStationBLL taxiStationBLL = new TaxiStationBLL();

            return taxiStationBLL.Delete(code);
        }
    }
}
