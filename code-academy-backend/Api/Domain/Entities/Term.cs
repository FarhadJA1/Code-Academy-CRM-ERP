using Domain.Common;
using System.Collections.Generic;

namespace Domain.Entities
{
    public class Term:BaseEntity
    {
        public string Day { get; set; }
        public string Time { get; set; }
        public List<Group> Groups { get; set; }
        public int ClassroomId { get; set; }
        public Classroom Classroom { get; set; }
        public int? GroupId { get; set; }
        public Group Group { get; set; }
    }
}
