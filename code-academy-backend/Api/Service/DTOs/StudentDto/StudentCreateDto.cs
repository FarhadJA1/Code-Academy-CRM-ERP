using Domain.Entities;
using Service.DTOs.GroupDto;
using Service.DTOs.PayTypeDto;
using Service.DTOs.ResourceDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.StudentDto
{
    public class StudentCreateDto
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public DateTime Birthday { get; set; }
        public int PayTypeId { get; set; }
        public int ResourceId { get; set; }

    }
}
