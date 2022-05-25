﻿using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;


namespace Domain.Configurations
{
    public class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.Property(m => m.Name).IsRequired().HasMaxLength(100);
            builder.Property(m => m.Surname).IsRequired().HasMaxLength(100);
            builder.Property(m => m.CreateDate).HasDefaultValue(DateTime.Now.ToShortDateString());
            builder.Property(m => m.Email).IsRequired().HasMaxLength(100);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
            builder.Property(m => m.Surname).IsRequired().HasMaxLength(100);
        }
    }
}
