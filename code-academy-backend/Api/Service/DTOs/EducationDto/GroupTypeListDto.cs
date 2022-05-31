﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Group> Groups { get; set; }
    }
}
