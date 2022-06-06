using Domain.Entities;
using Service.DTOs.StudentDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.GroupDto
{
    public class GroupListDto
    {
        public int Id { get; set; }
        public bool SoftDelete { get; set; }
        public int GroupTypeId { get; set; }        
        public string GroupCode { get; set; }
        public List<StudentGetDto> Students { get; set; }
        public List<TestDto> GroupTeachers { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsFull { get; set; }
        public int ClassroomId { get; set; }        
        public int TermId { get; set; }        

    }
    
    public class TestDto
    {
        public int Id { get; set; }
        public bool SoftDelete { get; set; }
        public int TeacherId { get; set; }
        public Teacher Teacher { get; set; }
        public int GroupId { get; set; }
        public Group Group { get; set; }
    }
}
