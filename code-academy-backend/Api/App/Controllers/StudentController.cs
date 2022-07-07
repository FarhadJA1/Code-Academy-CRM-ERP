using Microsoft.AspNetCore.Mvc;
using Service.DTOs.StudentDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class StudentController : BaseController
    {
        private readonly IStudentService _studentService;
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _studentService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateStudent")]
        public async Task<IActionResult> Create([FromBody] StudentCreateDto studentCreateDto)
        {
            await _studentService.CreateAsync(studentCreateDto);
            return Ok();
        }
        [HttpGet]
        [Route("DeleteStudent/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _studentService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateStudent/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] StudentUpdateDto studentUpdateDto)
        {
            await _studentService.UpdateAsync(id, studentUpdateDto);
            return Ok();
        }
        [HttpGet]
        [Route("StudentDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _studentService.StudentDetailsAsync(id));
        }
        [HttpGet]
        [Route("GetStudentsFromCall")]
        public async Task<IActionResult> GetStudentsFromCall()
        {
            return Ok(await _studentService.StudentsFromCallAsync());
        }
        [HttpGet]
        [Route("GetStudentsFromWeb")]
        public async Task<IActionResult> GetStudentsFromWeb()
        {
            return Ok(await _studentService.StudentsFromWebAsync());
        }
        [HttpGet]
        [Route("GetStudentsFromSocialNetwork")]
        public async Task<IActionResult> GetStudentsFromSocialNetwork()
        {
            return Ok(await _studentService.StudentsFromSocialNetworkAsync());
        }
        [HttpGet]
        [Route("GetStudentsFromSuggestion")]
        public async Task<IActionResult> GetStudentsFromSuggestion()
        {
            return Ok(await _studentService.StudentsFromSuggestionAsync());
        }
        [HttpGet]
        [Route("GetProgrammingStudents")]
        public async Task<IActionResult> GetProgrammingStudents()
        {
            return Ok(await _studentService.GetProgrammingStudentsAsync());
        }
        [HttpGet]
        [Route("GetDesignStudents")]
        public async Task<IActionResult> GetDesignStudents()
        {
            return Ok(await _studentService.GetDesignStudentsAsync());
        }
        [HttpGet]
        [Route("GetSystemStudents")]
        public async Task<IActionResult> GetSystemStudents()
        {
            return Ok(await _studentService.GetSystemStudentsAsync());
        }
        [HttpGet]
        [Route("GetMarketingStudents")]
        public async Task<IActionResult> GetMarketingStudents()
        {
            return Ok(await _studentService.GetMarketingStudentsAsync());
        }
        [HttpGet]
        [Route("Search")]
        public async Task<IActionResult> Search([FromQuery] string search)
        {
            return Ok(await _studentService.GetAllByConditionAsync(search));
        }
    }
}
