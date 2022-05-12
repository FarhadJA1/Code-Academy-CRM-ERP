using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.Group
{
    public class GroupGetDto
    {
        public int Id { get; set; }
        public GroupType GroupType { get; set; }
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public List<GroupTeacher> GroupTeachers { get; set; }
    }
}
