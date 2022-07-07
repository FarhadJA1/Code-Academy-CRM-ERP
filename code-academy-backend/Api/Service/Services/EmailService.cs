using Domain.Entities;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Routing;
using MimeKit;
using MimeKit.Text;
using Service.DTOs.IdentityDto;
using Service.Services.Interfaces;
using System.IO;


namespace Service.Services
{
    public class EmailService:IEmailService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IWebHostEnvironment _env;
        private readonly IHttpContextAccessor _accessor;
        private readonly LinkGenerator _generator;

        public EmailService(UserManager<AppUser> userManager, IWebHostEnvironment env, LinkGenerator generator, IHttpContextAccessor accessor)
        {
            _userManager = userManager;
            _generator = generator;
            _accessor = accessor;
            _env = env;

        }

        public void Register(RegisterDto registerDto)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Code Academy", "CodeAcademy@gmail.com"));
            message.To.Add(new MailboxAddress(registerDto.Name+" "+registerDto.Surname, registerDto.Email));
            message.Subject = "Welcome";
            string emailbody = string.Empty;

            using (StreamReader streamReader = new StreamReader(Path.Combine(_env.WebRootPath, "Templates", "SendEmail.html")))
            {
                emailbody = streamReader.ReadToEnd();
            }

            
            message.Body = new TextPart(TextFormat.Html) { Text = emailbody };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("maggotfarhad@gmail.com", "qmioecndhwhzhdht");
            smtp.Send(message);
            smtp.Disconnect(true);
        }
        public void ForgotPassword(AppUser user, string url, ForgotPasswordDto forgotPassword)
        {

            var message = new MimeMessage();

            message.From.Add(new MailboxAddress("Code Academy", "CodeAcademy@gmail.com"));

            message.To.Add(new MailboxAddress(user.Fullname, forgotPassword.Email));
            message.Subject = "Reset Password";

            string emailbody = string.Empty;

            using (StreamReader streamReader = new StreamReader(Path.Combine(_env.WebRootPath, "Templates", "Reset.html")))
            {
                emailbody = streamReader.ReadToEnd();
            }



            emailbody = emailbody.Replace("{{fullname}}", $"{user.Fullname}").Replace("{{code}}", $"{url}");

            message.Body = new TextPart(TextFormat.Html) { Text = emailbody };

            using var smtp = new SmtpClient();

            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("maggotfarhad@gmail.com", "qmioecndhwhzhdht");
            smtp.Send(message);
            smtp.Disconnect(true);

        }
    }
}
