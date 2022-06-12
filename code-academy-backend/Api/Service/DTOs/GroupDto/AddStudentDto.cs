using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.GroupDto
{
    public class AddStudentDto
    {
        public List<Student> Students { get; set; }
    }
}
