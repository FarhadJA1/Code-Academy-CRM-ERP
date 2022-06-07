using AutoMapper;
using Domain.Entities;
using Repo.Repositories.Interfaces;
using Service.DTOs.GroupDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Service.Services
{
    public class GroupService : IGroupService
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IGroupTypeRepository _groupTypeRepository;
        private readonly IMapper _mapper;
        public GroupService(IGroupTypeRepository groupTypeRepository,IGroupRepository groupRepository,IMapper mapper)
        {
            _groupRepository = groupRepository;
            _mapper = mapper;
            _groupTypeRepository = groupTypeRepository;
        }
        
        public async Task<List<GroupListDto>> GetAllAsync()
        {
            var model = await _groupRepository.GetAllSGroupDetails();
            var result = _mapper.Map<List<GroupListDto>>(model);
            return result;
        }

        public async Task CreateAsync(GroupCreateDto groupCreateDto)
        {
            var lastGroup = await _groupRepository.GetLastGroup();
            string code;
            if(lastGroup == null)
            {
                code = "10";
            }
            else
            {
                code = lastGroup.GroupCode.Substring(2, 2);
            }
            
            var result = Int32.Parse(code) + 1;
            var groupType = await _groupTypeRepository.GetAsync(groupCreateDto.TermId);
            Group group = new()
            {
                GroupTypeId = groupCreateDto.GroupTypeId,
                CreateDate = groupCreateDto.CreateDate,
                ExpireDate = groupCreateDto.CreateDate.AddDays(1).AddMonths(6).AddDays(-1),
                GroupCode = groupType.Name[0].ToString() + groupCreateDto.GroupTypeId.ToString() + result,
                Capacity = groupCreateDto.Capacity,
                IsOver = false,              
                
            };
            
            await _groupRepository.CreateAsync(group);
        }
        public async Task DeleteAsync(int id)
        {
            Group group = await _groupRepository.GetAsync(id);

            await _groupRepository.SoftDeleteAsync(group);
        }


    }
}
