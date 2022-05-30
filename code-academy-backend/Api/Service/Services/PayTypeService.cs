using AutoMapper;
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
     /*   public async Task CreateAsync(ResourceCreateDto resourceCreateDto)
        {
            await _resourceRepository.CreateAsync(_mapper.Map<Resource>(resourceCreateDto));
        }
        public async Task DeleteAsync(int id)
        {
            Resource resource = await _resourceRepository.GetAsync(id);

            await _resourceRepository.SoftDeleteAsync(resource);
        }
        public async Task UpdateAsync(int id, ResourceUpdateDto resourceUpdateDto)
        {
            var entity = await _resourceRepository.GetAsync(id);
            _mapper.Map(resourceUpdateDto, entity);
            await _resourceRepository.UpdateAsync(entity);
        }*/
    }
}
