using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Group:BaseEntity
    {
        public int GroupTypeId { get; set; }
        public GroupType GroupType { get; set; }
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public List<GroupTeacher> GroupTeachers { get; set; }

    }
}
