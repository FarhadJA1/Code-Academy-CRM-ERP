using Service.DTOs.StudentDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IStudentService
    {
        Task<List<StudentListDto>> GetAllAsync();
        Task CreateAsync(StudentCreateDto studentCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, StudentUpdateDto studentUpdateDto);
    }
}
