using Microsoft.AspNetCore.Mvc;
using Service.DTOs.Group;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class GroupController : BaseController
    {
        private readonly IGroupService _groupService;
        public GroupController(IGroupService groupService)
        {
            _groupService = groupService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _groupService.GetAll());
        }
        [HttpGet]
        [Route("Get")]
        public async Task<IActionResult> Get([FromHeader] int id)
        {
            return Ok(await _groupService.Get(id));
        }
        [HttpPost]
        [Route("CreateGroup")]
        public async Task<IActionResult> Create([FromBody] GroupCreateDto groupCreateDto)
        {
            await _groupService.CreateAsync(groupCreateDto);
            return Ok();
        }
    }
}
