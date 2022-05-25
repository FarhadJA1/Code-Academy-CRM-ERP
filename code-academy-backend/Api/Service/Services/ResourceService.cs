using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.Resource;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class ResourceService : IResourceService
    {
        private readonly IResourceRepository _resourceRepository;
        private readonly IMapper _mapper;
        public ResourceService(IResourceRepository resourceRepository, IMapper mapper)
        {
            _resourceRepository = resourceRepository;
            _mapper = mapper;
        }
        public async Task<List<ResourceListDto>> GetAllAsync()
        {
            var model = await _resourceRepository.GetAllAsync();
            return _mapper.Map<List<ResourceListDto>>(model);
        }
        public async Task CreateAsync(ResourceCreateDto resourceCreateDto)
        {
            await _resourceRepository.CreateAsync(_mapper.Map<Resource>(resourceCreateDto));
        }
        public async Task DeleteAsync(ResourceCreateDto resourceCreateDto)
        {
            await _resourceRepository.CreateAsync(_mapper.Map<Resource>(resourceCreateDto));
        }
    }
}
