using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.EducationDto
{
    public class GroupTypeUpdateDto
    {
        public string Name { get; set; }
    }
    public class GroupTypeUpdateValidator : AbstractValidator<GroupTypeUpdateDto>
    {
        public GroupTypeUpdateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);
        }
    }
}
