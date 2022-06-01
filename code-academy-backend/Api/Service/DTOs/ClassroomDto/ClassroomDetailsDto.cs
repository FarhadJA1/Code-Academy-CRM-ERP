using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ClassroomDto
{
    public class ClassroomDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsBusy { get; set; }
        public int Capacity { get; set; }
        public List<GroupClassTerm> GroupClassTerms { get; set; }
    }
}
