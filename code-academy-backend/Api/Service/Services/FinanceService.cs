using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.FinanceDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class FinanceService : IFinanceService
    {
        private readonly IFinanceRepository _financeRepository;
        private readonly IMapper _mapper;
        public FinanceService(IFinanceRepository financeRepository, IMapper mapper)
        {
            _financeRepository = financeRepository;
            _mapper = mapper;
        }
        public async Task<List<FinanceListDto>> GetAllAsync()
        {
            var model = await _financeRepository.GetAllAsync();
            return _mapper.Map<List<FinanceListDto>>(model);
        }
        public async Task CreateAsync(FinanceCreateDto financeCreateDto)
        {
            Finance finance = new()
            {
                Income=financeCreateDto.Income,
                Expence=financeCreateDto.Expence,
                Total=financeCreateDto.Income-financeCreateDto.Expence,
                CreateDate=DateTime.Now
            };
            await _financeRepository.CreateAsync(finance);
        }
    }
}
