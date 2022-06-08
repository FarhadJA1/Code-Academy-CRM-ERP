using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Profession:BaseEntity
    {
        public string Name { get; set; }
        public List<Teacher> Teachers { get; set; }
    }
}
