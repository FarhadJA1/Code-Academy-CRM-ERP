using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.Group
{
    public class GroupListDto
    {
        public int GroupTypeId { get; set; }
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public List<GroupTeacher> GroupTeachers { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }

    }
    
}
