using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class StudentRepository : Repository<Student>, IStudentRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Student> entities;
        public StudentRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Student>();
        }

        public async Task<List<Student>> GetAllStudentDetails()
        {
            List<Student> students = await entities
                .Where(m => m.SoftDelete == false)
                .OrderByDescending(m => m.Id)
                .Include(m => m.PayType)
                .Include(m => m.Resource)
                .Include(m => m.Group)
                .ToListAsync();

            return students;
        }
        public async Task<Student> GetStudentDetails(int id)
        {
            Student student = await entities
                .Where(m => m.Id == id)
                .Include(m => m.PayType)
                .Include(m => m.Resource)
                .Include(m => m.Group)
                .FirstOrDefaultAsync();
            return student;
        }
        public async Task<List<Student>> GetStudentsFromCall()
        {
            List<Student> students = await entities
                .Where(m => m.ResourceId == 3)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetStudentsFromSocialNetwork()
        {
            List<Student> students = await entities
                .Where(m => m.ResourceId == 5)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetStudentsFromSuggestion()
        {
            List<Student> students = await entities
                .Where(m => m.ResourceId == 7)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetStudentsFromWeb()
        {
            List<Student> students = await entities
                .Where(m => m.ResourceId == 6)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetProgrammingStudents()
        {
            List<Student> students = await entities
                .Where(m => m.Group.GroupTypeId == 2)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetDesignStudents()
        {
            List<Student> students = await entities
                .Where(m => m.Group.GroupTypeId == 3)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetMarketingStudents()
        {
            List<Student> students = await entities
                .Where(m => m.Group.GroupTypeId == 5)
                .ToListAsync();
            return students;
        }
        public async Task<List<Student>> GetSystemStudents()
        {
            List<Student> students = await entities
                .Where(m => m.Group.GroupTypeId == 4)
                .ToListAsync();
            return students;
        }
    }
}
