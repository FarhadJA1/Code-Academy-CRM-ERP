﻿using Microsoft.Extensions.DependencyInjection;
using Service.Services;
using Service.Services.Interfaces;


namespace Service
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServiceLayer(this IServiceCollection services)
        {
            services.AddScoped<IGroupService, GroupService>();
            services.AddScoped<IResourceService, ResourceService>();
            services.AddScoped<IPayTypeService, PayTypeService>();
            services.AddScoped<IEducationService, EducationService>();
            services.AddScoped<IHourService, HourService>();
            services.AddScoped<IClassroomService, ClassroomService>();
            return services;

        }
    }
}
