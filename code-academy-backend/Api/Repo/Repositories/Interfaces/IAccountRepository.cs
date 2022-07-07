﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Repositories.Interfaces
{
    public interface IAccountRepository
    {
        Task<List<AppUser>> GetAllEmployeesAsync();
    }
}
