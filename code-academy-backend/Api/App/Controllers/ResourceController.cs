using Microsoft.AspNetCore.Mvc;
using Service.DTOs.Resource;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class ResourceController : BaseController
    {
        private readonly IResourceService _resourceService;
        public ResourceController(IResourceService resourceService)
        {
            _resourceService = resourceService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _resourceService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateResource")]
        public async Task<IActionResult> Create([FromBody] ResourceCreateDto groupCreateDto)
        {
            await _resourceService.CreateAsync(groupCreateDto);
            return Ok();
        }
    }
}
