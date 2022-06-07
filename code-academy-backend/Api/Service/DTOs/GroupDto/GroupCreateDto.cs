using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.GroupDto
{
    public class GroupCreateDto
    {
        public int GroupTypeId { get; set; }        
        public int TermId { get; set; }        
        public int Capacity { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
