using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Repo.Data;
using Repo.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Repositories
{
    public class PayTypeRepository : Repository<PayType>, IPayTypeRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<PayType> entities;
        public PayTypeRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<PayType>();
        }

        public async Task<PayType> PayTypeDetails(int id)
        {
            PayType payType = await entities
                .Where(m => m.Id == id)
                .Include(m => m.Students)
                .FirstOrDefaultAsync();
            return payType;
        }
    }
}
