using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.HourDto
{
    public class HourDetailsDto
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public string Time { get; set; }
        public List<GroupClassTerm> GroupClassTerms { get; set; }
    }
}
