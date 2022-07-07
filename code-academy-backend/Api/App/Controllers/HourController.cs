﻿using Microsoft.AspNetCore.Mvc;
using Service.DTOs.HourDto;
using Service.Services.Interfaces;
using System.Threading.Tasks;

namespace App.Controllers
{
    public class HourController : BaseController
    {
        private readonly IHourService _hourService;
        public HourController(IHourService hourService)
        {
            _hourService = hourService;
        }
        [HttpGet]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok(await _hourService.GetAllAsync());
        }
        [HttpPost]
        [Route("CreateHour")]
        public async Task<IActionResult> Create([FromBody] HourCreateDto hourCreateDto)
        {
            if (hourCreateDto.Day.Trim() != "" && hourCreateDto.Time.Trim() != "")
            {
                await _hourService.CreateAsync(hourCreateDto);
                return Ok();
            }
            return StatusCode(400);
        }
        [HttpGet]
        [Route("DeleteHour/{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _hourService.DeleteAsync(id);
            return Ok();
        }
        [HttpPut]
        [Route("UpdateHour/{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] HourUpdateDto hourUpdateDto)
        {
            
            if (hourUpdateDto.Day.Trim() != "" && hourUpdateDto.Time.Trim() != "")
            {
                await _hourService.UpdateAsync(id, hourUpdateDto);
                return Ok();
            }
            return StatusCode(400);
        }
        [HttpGet]
        [Route("HourDetails/{id}")]
        public async Task<IActionResult> Details([FromRoute] int id)
        {

            return Ok(await _hourService.HourDetailsAsync(id));
        }
        
    }
}
