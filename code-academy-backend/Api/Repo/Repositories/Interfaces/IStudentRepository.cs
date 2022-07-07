using Domain.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IStudentRepository : IRepository<Student>
    {
        Task<Student> GetStudentDetails(int id);
        Task<List<Student>> GetAllStudentDetails();
        Task<List<Student>> GetStudentsFromCall();
        Task<List<Student>> GetStudentsFromSocialNetwork();
        Task<List<Student>> GetStudentsFromSuggestion();
        Task<List<Student>> GetStudentsFromWeb();
        Task<List<Student>> GetProgrammingStudents();
        Task<List<Student>> GetDesignStudents();
        Task<List<Student>> GetMarketingStudents();
        Task<List<Student>> GetSystemStudents();
    }
}
