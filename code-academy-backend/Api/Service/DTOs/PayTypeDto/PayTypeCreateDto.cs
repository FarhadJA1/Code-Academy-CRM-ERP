using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.PayTypeDto
{
    public class PayTypeCreateDto
    {
        public string Name { get; set; }
    }
    public class PayTypeCreateValidator : AbstractValidator<PayTypeUpdateDto>
    {
        public PayTypeCreateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);

        }
    }
}
