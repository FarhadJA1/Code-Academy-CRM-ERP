using Service.DTOs.GroupDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IGroupService
    {
        Task<List<GroupListDto>> GetAllAsync();
        Task DeleteAsync(int id);
        Task CreateAsync(GroupCreateDto groupCreateDto);
    }
}
