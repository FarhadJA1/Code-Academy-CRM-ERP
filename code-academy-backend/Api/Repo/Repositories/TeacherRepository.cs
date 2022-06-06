﻿using Domain.Entities;
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
    public class TeacherRepository : Repository<Teacher>, ITeacherRepository
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Teacher> entities;
        public TeacherRepository(AppDbContext context) : base(context)
        {
            _context = context;
            entities = _context.Set<Teacher>();
        }

        public async Task<List<Teacher>> GetAllTeacherDetails()
        {
            List<Teacher> teachers = await entities
                .Where(m => m.SoftDelete == false)
                .Include(m => m.GroupTeachers)
                .ThenInclude(m => m.Group)                
                .ToListAsync();

            return teachers;
        }
    }
}
