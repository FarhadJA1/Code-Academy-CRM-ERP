using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Teacher:BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }        
        public int Salary { get; set; }        
        public int Phone { get; set; }
        public DateTime CreateDate { get; set; }
        public List<GroupTeacher> GroupTeachers { get; set; }
    }
}
