using Service.DTOs.HourDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IHourService
    {
        Task<List<HourListDto>> GetAllAsync();
        Task CreateAsync(HourCreateDto hourCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, HourUpdateDto hourUpdateDto);
        Task<HourDetailsDto> HourDetailsAsync(int id);

    }
}
