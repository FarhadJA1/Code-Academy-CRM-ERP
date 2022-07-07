using Domain.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Service.DTOs.IdentityDto;
using Service.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static App.Utilities.Helpers.Helper;

namespace App.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IAccountService _accountService;
        private readonly IWebHostEnvironment _env;
        private readonly UserManager<AppUser> _userManager;
        private readonly IEmailService _emailService;
        private readonly RoleManager<IdentityRole> _roleManager;
        public AccountController(IAccountService service, IWebHostEnvironment env, UserManager<AppUser> userManager
                                , IEmailService emailService, RoleManager<IdentityRole> roleManager)
        {
            _accountService = service;
            _env = env;
            _userManager = userManager;
            _emailService = emailService;
            _roleManager = roleManager;

        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            await _accountService.Register(registerDto);
            _emailService.Register(registerDto);
            return Ok();
        }
        [HttpPost]
        [Route("Login")]
        public async Task<string> Login([FromBody] LoginDto loginDto)
        {
            return await _accountService.Login(loginDto);
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAllEmployees()        {
            
            return Ok(await _accountService.GetAllEmployeesAsync());
        }

        [HttpPost]
        [Route("CreateRole")]
        public async Task CreateRole()
        {
            foreach (var role in Enum.GetValues(typeof(Roles)))
            {
                if (!await _roleManager.RoleExistsAsync(role.ToString()))
                {
                    await _roleManager.CreateAsync(new IdentityRole { Name = role.ToString() });
                }
            }
        }
        [HttpGet]
        [Route("GetUserByEmail/{email}")]
        public async Task<UserDto> GetUserByEmail([FromRoute] string email)
        {
            var user = await _accountService.GetUserByEmailAsync(email);

            return user;
        }
        [HttpPost]
        [Route("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordDto forgotPassword)
        {
            var user = await _userManager.FindByEmailAsync(forgotPassword.Email);

            if (user is null) throw new ArgumentNullException();

            string forgotpasswordtoken = await _userManager.GeneratePasswordResetTokenAsync(user);
            //string url = Url.Action("http://localhost:3000/", "forgotpassword", new { email = user.Email, Id = user.Id, token = forgotpasswordtoken, }, Request.Scheme);
            string url2 = "http://localhost:3000/email-forgot-password/" + user.Email + "/token=" + forgotpasswordtoken;
            _emailService.ForgotPassword(user, url2, forgotPassword);

            return Ok();
        }
        [HttpPost]
        [Route("ChangePassword")]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto resetPassworddto)
        {
            var user = await _userManager.FindByEmailAsync(resetPassworddto.Email);

            if (user is null) return NotFound();

            IdentityResult result = await _userManager.ResetPasswordAsync(user, resetPassworddto.Token, resetPassworddto.Password);

            return Ok();

        }
        [HttpPut]
        [Route("UpdatePassword/{email}")]
        public async Task<IActionResult> UpdatePassword([FromRoute] string email, [FromBody] UpdatePasswordDto updatePasswordDto)
        {
            AppUser appUser = await _userManager.FindByEmailAsync(email);
            await _accountService.UpdatePassword(appUser, updatePasswordDto);
            return Ok();
        }
        [HttpPut]
        [Route("ChangeImage/{email}")]
        public async Task<IActionResult> UpdatePhoto([FromRoute] string email, [FromBody] ChangePhotoDto changePhotoDto)
        {
            AppUser appUser = await _userManager.FindByEmailAsync(email);
            await _accountService.ChangePhoto(appUser, changePhotoDto);
            return Ok();
        }


    }
}
