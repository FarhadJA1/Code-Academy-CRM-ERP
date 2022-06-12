using Domain.Entities;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IPayTypeRepository : IRepository<PayType>
    {
        Task<PayType> PayTypeDetails(int id);
    }
}
