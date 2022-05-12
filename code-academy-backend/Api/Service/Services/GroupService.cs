using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.Group;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IMapper _mapper;
        public GroupService(IGroupRepository groupRepository,IMapper mapper)
        {
            _groupRepository = groupRepository;
            _mapper = mapper;
        }

        public async Task<GroupGetDto> Get(int id)
        {
            var model = await _groupRepository.GetWithDetails(id);
            return _mapper.Map<GroupGetDto>(model);
        }

        public async Task<List<GroupListDto>> GetAll()
        {
            var model = await _groupRepository.GetAllAsync();
            return _mapper.Map<List<GroupListDto>>(model);
        }
        public async Task CreateAsync(GroupCreateDto groupCreateDto)
        {
            var lastGroup = await _groupRepository.GetLastGroup();
            var code = lastGroup.GroupCode.Substring(1, 3);
            var result = Int32.Parse(code)+1;
            groupCreateDto.GroupCode = groupCreateDto.GroupType.Name[0].ToString()+result;
            await _groupRepository.CreateAsync(_mapper.Map<Group>(groupCreateDto));
        }

        
    }
}
