using Domain.Entities;
using System.Collections.Generic;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeDetailsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Group> Groups { get; set; }
    }
}
