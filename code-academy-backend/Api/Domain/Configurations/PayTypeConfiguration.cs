using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Configurations
{
    public class PayTypeConfiguration : IEntityTypeConfiguration<PayType>
    {
        public void Configure(EntityTypeBuilder<PayType> builder)
        {
            builder.Property(m => m.Name).IsRequired().HasMaxLength(50);
            builder.Property(m => m.SoftDelete).HasDefaultValue(false);
        }
    }
}
