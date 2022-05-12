using Domain.Entities;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.Group
{
    public class GroupCreateDto
    {
        public string GroupCode { get; set; }
        public GroupType GroupType { get; set; }
        
    }
    public class GroupCreateValidator : AbstractValidator<GroupCreateDto>
    {
        public GroupCreateValidator()
        {
            RuleFor(m => m.GroupType.Name).NotEmpty().WithMessage("Please add 'Education Type'").MinimumLength(5).MaximumLength(40);
            RuleFor(m => m.GroupCode).NotEmpty().MinimumLength(1).MaximumLength(100);

        }
    }
}
