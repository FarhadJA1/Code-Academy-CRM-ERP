using Domain.Entities;
using Service.DTOs.IdentityDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IEmailService
    {
        void Register(RegisterDto registerDto);
        void ForgotPassword(AppUser user, string url, ForgotPasswordDto forgotPassword);
    }
}
