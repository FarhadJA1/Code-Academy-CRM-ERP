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
        Task CreateAsync(PayTypeCreateDto payTypeCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, PayTypeUpdateDto payTypeUpdateDto);
    }
}
