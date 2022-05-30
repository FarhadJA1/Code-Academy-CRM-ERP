using Microsoft.AspNetCore.Mvc;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class PayTypeController : BaseController
    {
        private readonly IPayTypeService _payTypeService;
        public PayTypeController(IPayTypeService payTypeService)
        {
            _payTypeService = payTypeService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _payTypeService.GetAllAsync());
        }
    }
}
