using AutoMapper;
using Domain.Entities;
using Service.DTOs.Group;

namespace Service.Mappings
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<Group, GroupListDto>();
        }
    }
}
