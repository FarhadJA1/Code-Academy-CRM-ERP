using AutoMapper;
using Domain.Entities;
using Service.DTOs.Group;
using Service.DTOs.Resource;

namespace Service.Mappings
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<Group, GroupListDto>();
            CreateMap<Group, GroupGetDto>();
            CreateMap<Group, GroupCreateDto>().ReverseMap();
            CreateMap<Resource, ResourceListDto>();
            CreateMap<Resource, ResourceCreateDto>().ReverseMap();
        }
    }
}
