using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Classroom:BaseEntity
    {
        public string Name { get; set; }        
        public bool IsBusy { get; set; } 
        public int Capacity { get; set; }
        public List<Group> Groups { get; set; }
        public int TermId { get; set; }
        public Term Term { get; set; }
    }
}
