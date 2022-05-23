using Domain.Common;
using System;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Group:BaseEntity
    {
        public int GroupTypeId { get; set; }
        public GroupType GroupType { get; set; }
        public string GroupCode { get; set; }
        public List<Student> Students { get; set; }
        public List<GroupTeacher> GroupTeachers { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime ExpireDate { get; set; }
        public int Capacity { get; set; }
        public bool IsFull { get; set; }
        public int ClassroomId { get; set; }
        public Classroom Classroom { get; set; }
        public int? TermId { get; set; }
        
        public Term Term { get; set; }

    }
}
