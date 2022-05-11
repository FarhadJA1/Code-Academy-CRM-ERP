using AutoMapper;
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

        public async Task<List<GroupListDto>> GetAll()
        {
            var model = await _groupRepository.GetAllAsync();
            return _mapper.Map<List<GroupListDto>>(model);
        }
    }
}
