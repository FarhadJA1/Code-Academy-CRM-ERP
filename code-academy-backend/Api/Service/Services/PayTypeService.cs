﻿using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.PayType;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class PayTypeService:IPayTypeService
    {
        private readonly IPayTypeRepository _payTypeRepository;
        private readonly IMapper _mapper;
        public PayTypeService(IPayTypeRepository payTypeRepository, IMapper mapper)
        {
            _payTypeRepository = payTypeRepository;
            _mapper = mapper;
        }
        public async Task<List<PayTypeListDto>> GetAllAsync()
        {
            var model = await _payTypeRepository.GetAllAsync();
            return _mapper.Map<List<PayTypeListDto>>(model);
        }
        public async Task CreateAsync(PayTypeCreateDto payTypeCreateDto)
        {
            await _payTypeRepository.CreateAsync(_mapper.Map<PayType>(payTypeCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            PayType payType = await _payTypeRepository.GetAsync(id);
            await _payTypeRepository.SoftDeleteAsync(payType);
        }
        public async Task UpdateAsync(int id, PayTypeUpdateDto payTypeUpdateDto)
        {
            var entity = await _payTypeRepository.GetAsync(id);
            _mapper.Map(payTypeUpdateDto, entity);
            await _payTypeRepository.UpdateAsync(entity);
        }

    }
}
