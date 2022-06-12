using Domain.Entities;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IResourceRepository : IRepository<Resource>
    {
        Task<Resource> ResourceDetails(int id);
    }
}
