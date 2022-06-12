using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.ClassroomDto
{
    public class ClassroomListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsBusy { get; set; }
        public int Capacity { get; set; }
        public List<GroupClassTerm> GroupClassTerms { get; set; }
    }
}
