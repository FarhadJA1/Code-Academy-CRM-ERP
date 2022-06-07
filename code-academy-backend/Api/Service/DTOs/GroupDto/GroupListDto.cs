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
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public Teacher Teacher { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsOver { get; set; }

    }
    
    
}
