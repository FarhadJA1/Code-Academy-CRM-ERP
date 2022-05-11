using Domain.Entities;
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
        public GroupRepository(AppDbContext context) : base(context)
        {

        }
    }
}
