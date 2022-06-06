using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IGroupRepository:IRepository<Group>
    {
        Task<Group> GetWithDetails(int id);
        Task<Group> GetLastGroup();
        Task<List<Group>> GetAllSGroupDetails();
    }
}
