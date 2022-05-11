﻿using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Student:BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public DateTime Birthday { get; set; }
        public int GroupId { get; set; }
        public Group Group { get; set; }
        public int PayTypeId { get; set; }
        public PayType PayType { get; set; }
        public DateTime CreateDate { get; set; }
        public int ResourceId { get; set; }
        public Resource Resource { get; set; }
    }
}