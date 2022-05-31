using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.ResourceDto
{
    public class ResourceCreateDto
    {
        public string Name { get; set; }

    }
    public class ResourceCreateValidator : AbstractValidator<ResourceCreateDto>
    {
        public ResourceCreateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Resource Type'").MaximumLength(40);          

        }
    }
}
