using Microsoft.AspNetCore.Mvc;

using Service.DTOs.GroupDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
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
        [HttpPut]
        [Route("AddTeacher/{id}")]
        public async Task<IActionResult> AddTeacher([FromRoute] int id, [FromBody] AddTeacherDto addTeacherDto)
        {
            await _groupService.AssignTeacherAsync(id, addTeacherDto);
            return Ok();
        }
        [HttpPut]
        [Route("AddClassroom/{id}")]
        public async Task<IActionResult> AddClassroom([FromRoute] int id, [FromBody] AddClassroomDto addClassroomDto)
        {
            await _groupService.AssignClassroomAsync(id, addClassroomDto);
            return Ok();
        }
        [HttpPut]
        [Route("AddStudents/{id}")]
        public async Task<IActionResult> AddStudents([FromRoute] int id, [FromBody] AddStudentDto addStudentDto)
        {
            await _groupService.AddStudentsAsync(id, addStudentDto);
            return Ok();
        }
        [HttpGet]
        [Route("GroupDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _groupService.GroupDetailsAsync(id));
        }
        [HttpGet]
        [Route("GetProgrammingGroups")]
        public async Task<IActionResult> GetProgrammingGroups()
        {
            var result = await _groupService.GetProgrammingGroupsAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetDesignGroups")]
        public async Task<IActionResult> GetDesignGroups()
        {
            var result = await _groupService.GetDesignGroupsAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetMarketingGroups")]
        public async Task<IActionResult> GetMarketingGroups()
        {
            var result = await _groupService.GetMarketingGroupsAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetSystemGroups")]
        public async Task<IActionResult> GetSystemGroups()
        {
            var result = await _groupService.GetSystemGroupsAsync();
            return Ok(result);
        }
        [HttpGet]
        [Route("Search")]
        public async Task<IActionResult> Search([FromQuery] string search)
        {
            return Ok(await _groupService.GetAllByConditionAsync(search));
        }


    }
}
