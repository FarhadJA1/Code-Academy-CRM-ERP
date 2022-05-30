using Service.DTOs.PayType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IPayTypeService
    {
        Task<List<PayTypeListDto>> GetAllAsync();
    }
}
