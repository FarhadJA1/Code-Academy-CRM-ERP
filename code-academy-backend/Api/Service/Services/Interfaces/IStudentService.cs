using Service.DTOs.StudentDto;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentListDto>> GetAllAsync();
        Task CreateAsync(StudentCreateDto studentCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, StudentUpdateDto studentUpdateDto);
        Task<StudentDetailDto> StudentDetailsAsync(int id);
        Task<List<StudentGetDto>> StudentsFromCallAsync();
        Task<List<StudentGetDto>> StudentsFromSuggestionAsync();
        Task<List<StudentGetDto>> StudentsFromWebAsync();
        Task<List<StudentGetDto>> StudentsFromSocialNetworkAsync();
        Task<List<StudentGetDto>> GetProgrammingStudentsAsync();
        Task<List<StudentGetDto>> GetDesignStudentsAsync();
        Task<List<StudentGetDto>> GetSystemStudentsAsync();
        Task<List<StudentGetDto>> GetMarketingStudentsAsync();
        Task<IEnumerable<StudentListDto>> GetAllByConditionAsync(string search);
    }
}
