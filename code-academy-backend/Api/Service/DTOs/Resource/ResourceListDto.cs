﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.Resource
{
    public class ResourceListDto
    {
        public string Name { get; set; }
        public List<Student> Students { get; set; }
    }
}
