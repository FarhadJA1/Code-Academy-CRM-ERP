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
            return services;

        }
    }
}
