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
    [RoutePrefix("api/RegularUser")]
    public class RegularUserController : ApiController
    {
        // GET: api/Taxi
        [Route("GetAll")]
        [HttpGet]

        public List<RegularUserDTO> GetAll()
        {
            //RegularUserBLL regularUserBLL = new RegularUserBLL();
            return RegularUserBLL.GetAll();
        }

        // GET: api/Taxi/5
        //[Route("GetById.{id}")]
        //[HttpGet]
        //public List<>GetBYID(int id)
        //{
        //   
        //}

       // GET: api/Taxi/5
        [Route("GetByCode/{existUser}")]
        [HttpGet]
        public RegularUserDTO GetByCode(RegularUserDTO existUser)
        {
            return RegularUserBLL.GetByCode(existUser);
        }

        //// POST: api/Taxi
        //[Route("Add/{newRegularUser}")]
        //[HttpPost]
        //public int Add(RegularUserDTO newRegularUser)
        //{
        //    //RegularUserBLL regularUserBLL = new RegularUserBLL();
        //    return RegularUserBLL.Add(newRegularUser);
        //}

        //[Route("newadd")]
        //[HttpPost]
        //public IHttpActionResult NewAdd()
        //{
        //    //RegularUserBLL regularUserBLL = new RegularUserBLL();

        //    RegularUserDTO newRegularUser = new RegularUserDTO() {UserId=65, CellphoneuserNumber="533", UserName="fdsf"};

        //    return  Ok(RegularUserBLL.Add(newRegularUser));
        //}

        //התחברות משתמש
        // GET: api/Users/5
        [Route("Connect")]
        [HttpPost]
        public RegularUserDTO Connect([FromBody] RegularUserDTO existRegularUser)
        {

            return RegularUserBLL.GetById(existRegularUser);
        }

        [HttpPost]
        [Route("Post")]
        public int Post(RegularUserDTO newRegularUser)
        {
            RegularUserBLL regularUserBLL = new RegularUserBLL();
            return RegularUserBLL.Add(newRegularUser);
        }


        // PUT: api/Taxi/5
        [Route("upRegularUser")]
        [HttpPut]

        public bool Put(RegularUserDTO upRegularUser)
        {
            //RegularUserBLL regularUserBLL = new RegularUserBLL();

            return RegularUserBLL.Update(upRegularUser);
        }

        // DELETE: api/Taxi/5
        [Route("Delete/{id}")]
        [HttpDelete]

        public bool Delete(int id)
        {
            //RegularUserBLL regularUserBLL = new RegularUserBLL();

            return RegularUserBLL.Delete(id);
        }
    }
}
