using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.DTOs.PayType
{
    public class PayTypeUpdateDto
    {
        public string Name { get; set; }
    }
    public class PayTypeUpdateValidator : AbstractValidator<PayTypeUpdateDto>
    {
        public PayTypeUpdateValidator()
        {
            RuleFor(m => m.Name).NotEmpty().WithMessage("Please add 'Payment Type'").MaximumLength(40);
        }
    }
}
