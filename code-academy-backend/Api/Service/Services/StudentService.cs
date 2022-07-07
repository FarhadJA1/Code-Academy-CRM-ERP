using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.StudentDto;
using Service.Services.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepository _studentRepository;
        private readonly IMapper _mapper;
        public StudentService(IStudentRepository studentRepository, IMapper mapper)
        {
            _studentRepository = studentRepository;
            _mapper = mapper;
        }
        public async Task<List<StudentListDto>> GetAllAsync()
        {
            var model = await _studentRepository.GetAllStudentDetails();
            return _mapper.Map<List<StudentListDto>>(model);
        }
        public async Task CreateAsync(StudentCreateDto studentCreateDto)
        {
            await _studentRepository.CreateAsync(_mapper.Map<Student>(studentCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Student student = await _studentRepository.GetAsync(id);

            await _studentRepository.SoftDeleteAsync(student);
        }
        public async Task UpdateAsync(int id, StudentUpdateDto studentUpdateDto)
        {
            var entity = await _studentRepository.GetAsync(id);
            _mapper.Map(studentUpdateDto, entity);
            await _studentRepository.UpdateAsync(entity);
        }
        public async Task<StudentDetailDto> StudentDetailsAsync(int id)
        {
            var entity = await _studentRepository.GetStudentDetails(id);
            StudentDetailDto studentDetailDto = new();
            var result = _mapper.Map(entity, studentDetailDto);
            return result;
        }
        public async Task<List<StudentGetDto>> StudentsFromCallAsync()
        {
            var entity = await _studentRepository.GetStudentsFromCall();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> StudentsFromSuggestionAsync()
        {
            var entity = await _studentRepository.GetStudentsFromSuggestion();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> StudentsFromWebAsync()
        {
            var entity = await _studentRepository.GetStudentsFromWeb();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> StudentsFromSocialNetworkAsync()
        {
            var entity = await _studentRepository.GetStudentsFromSocialNetwork();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> GetProgrammingStudentsAsync()
        {
            var entity = await _studentRepository.GetProgrammingStudents();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> GetDesignStudentsAsync()
        {
            var entity = await _studentRepository.GetDesignStudents();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> GetSystemStudentsAsync()
        {
            var entity = await _studentRepository.GetSystemStudents();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<List<StudentGetDto>> GetMarketingStudentsAsync()
        {
            var entity = await _studentRepository.GetMarketingStudents();
            return _mapper.Map<List<StudentGetDto>>(entity);
        }
        public async Task<IEnumerable<StudentListDto>> GetAllByConditionAsync(string search)
        {
            var result = _mapper.Map<IEnumerable<StudentListDto>>(await _studentRepository.FindAllAsync(m => m.Name.Contains(search)||m.Surname.Contains(search)));
            return result;
        }
    }
}
