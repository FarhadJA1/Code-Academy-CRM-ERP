using Microsoft.AspNetCore.Mvc;
using Service.DTOs.GroupDto;
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
            var result = await _groupService.GetAllAsync();
            return Ok(result);
        }

        [HttpPost]
        [Route("CreateGroup")]
        public async Task<IActionResult> Create([FromBody] GroupCreateDto groupCreateDto)
        {
            await _groupService.CreateAsync(groupCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteGroup/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _groupService.DeleteAsync(id);
            return Ok();
        }
        

    }
}
