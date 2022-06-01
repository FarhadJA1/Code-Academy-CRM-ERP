using AutoMapper;
using Domain.Entities;
using Service.DTOs.EducationDto;
using Service.DTOs.GroupDto;
using Service.DTOs.HourDto;
using Service.DTOs.PayTypeDto;
using Service.DTOs.ResourceDto;

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
            CreateMap<Resource, ResourceUpdateDto>().ReverseMap();
            CreateMap<Resource, ResourceDetailsDto>();
            CreateMap<PayType, PayTypeListDto>();
            CreateMap<PayType, PayTypeCreateDto>().ReverseMap();
            CreateMap<PayType, PayTypeUpdateDto>().ReverseMap();
            CreateMap<PayType, PaymentDetailsDto>();
            CreateMap<GroupType, GroupTypeListDto>();
            CreateMap<GroupType, GroupTypeCreateDto>().ReverseMap();
            CreateMap<GroupType, GroupTypeUpdateDto>().ReverseMap();
            CreateMap<GroupType, GroupTypeDetailsDto>();
            CreateMap<Term, HourListDto>();
            CreateMap<Term, HourCreateDto>().ReverseMap();
            CreateMap<Term, HourUpdateDto>().ReverseMap();
            CreateMap<Term, HourDetailsDto>();
        }
    }
}
