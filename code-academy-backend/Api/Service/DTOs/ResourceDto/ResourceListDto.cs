using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.ResourceDto
{
    public class ResourceListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Student> Students { get; set; }
    }
}
