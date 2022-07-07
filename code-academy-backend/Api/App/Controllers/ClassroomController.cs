using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.DTOs.ClassroomDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    
    
    public class ClassroomController : BaseController
    {
        private readonly IClassroomService _classroomService;
        public ClassroomController(IClassroomService classroomService)
        {
            _classroomService = classroomService;
        }

        [HttpGet]
        [Route("GetAll")]
        
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _classroomService.GetAllAsync());
        }

        [HttpPost]
        [Route("CreateClassroom")]

        public async Task<IActionResult> Create([FromBody] ClassroomCreateDto classroomCreateDto)
        {
            if (classroomCreateDto.Name.Trim()!="")
            {
                await _classroomService.CreateAsync(classroomCreateDto);
                return Ok();
            }
            return StatusCode(400);

        }
        [HttpGet]
        [Route("DeleteClassroom/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _classroomService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateClassroom/{id}")]
       
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] ClassroomUpdateDto classroomUpdateDto)
        {
            if (classroomUpdateDto.Name.Trim() != "")
            {
                await _classroomService.UpdateAsync(id, classroomUpdateDto);
                return Ok();
            }
            return StatusCode(400);
        }
        [HttpGet]
        [Route("ResourceClassroom/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {
            return Ok(await _classroomService.ClassroomDetailsAsync(id));
        }
    }
}
