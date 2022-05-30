using Domain.Entities;
using System.Collections.Generic;


namespace Service.DTOs.PayType
{
    public class PayTypeListDto
    {
        public string Name { get; set; }
        public List<Student> Students { get; set; }
    }
}
