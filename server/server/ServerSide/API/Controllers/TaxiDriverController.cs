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
    [RoutePrefix("api/TaxiDriver")]
    public class TaxiDriverController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<TaxiDriverDTO> GetAll()
        {
            TaxiDriverBLL taxiDriverBLL = new TaxiDriverBLL();
            return taxiDriverBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

        // POST: api/Taxi//הוספה
        [Route("{newTaxiDriver}")]
        [HttpPost]

        public int Post(TaxiDriverDTO newTaxiDriver)
        {
            TaxiDriverBLL taxiDriverBLL = new TaxiDriverBLL();
            return taxiDriverBLL.Add(newTaxiDriver);
        }

        // PUT: api/Taxi/5//עדכון
        [Route("upTaxiDriver")]
        [HttpPut]

        public bool Put(TaxiDriverDTO upTaxiDriver)
        {
            TaxiDriverBLL taxiDriverBLL = new TaxiDriverBLL();

            return taxiDriverBLL.Update(upTaxiDriver);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{id}")]
        [HttpDelete]

        public bool Delete(int id)
        {
            TaxiDriverBLL taxiDriverBLL = new TaxiDriverBLL();

            return taxiDriverBLL.Delete(id);
        }

        [Route("{id}")]
        [HttpGet]
        public RideDTO GetRide(int id)
        {
            TaxiDriverBLL travelBLL = new TaxiDriverBLL();
            return travelBLL.GetRide(id);
        }

        [Route("SetRide/{rideid}/{s}/{end}")]
        [HttpPost]
        
        public bool SetRide(int rideid, string s,string end)
        {
            RideDTO ride = new RideDTO(rideid, s, end);
            return TaxiDriverBLL.SetRide(ride); 
        }

        //עדכון המילון כדי שהלולאה לא תעצר
        [Route("{id},{take}")]
        [HttpGet]

        public void YouTake(int id, int take)
        {
            TaxiDriverBLL.YouTake(id,take);
        }

        //[Route("load")]
        //[HttpPost]

        //public void load()
        //{
        //    TaxiDriverBLL.load();

        //}
    }
}
