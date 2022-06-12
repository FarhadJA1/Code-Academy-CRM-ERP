using Domain.Entities;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IGroupTypeRepository : IRepository<GroupType>
    {
        Task<GroupType> GroupTypeDetails(int id);
    }
}
