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
    public class GroupRepository : Repository<Group>, IGroupRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Group> entities;
        public GroupRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Group>();
        }
        public async Task<Group> GetWithDetails(int id)
        {
            Group group = await entities.Where(m=>m.Id==id)
                .Include(m => m.GroupType)
                .FirstOrDefaultAsync();
            return group;
        }
        public async Task<Group> GetLastGroup()
        {
            Group group = await entities
                .OrderByDescending(m=>m.Id)
                .FirstOrDefaultAsync();
            return group;
        }
        
    }
}

