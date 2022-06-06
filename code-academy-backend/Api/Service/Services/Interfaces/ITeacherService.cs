﻿using Service.DTOs.TeacherDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface ITeacherService
    {
        Task<List<TeacherListDto>> GetAllAsync();
        Task CreateAsync(TeacherCreateDto teacherCreateDto);
        Task DeleteAsync(int id);
        Task UpdateAsync(int id, TeacherUpdateDto teacherUpdateDto);
    }
}
