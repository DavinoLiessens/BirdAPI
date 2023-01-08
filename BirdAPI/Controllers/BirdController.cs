using BirdAPI.Application.Features.Bird.Queries;
using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Route("api/v1/birds")]
    public class BirdController : ControllerBase
    {
        private readonly IMediator _mediator;

        public BirdController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetBirds(int? page, int? pageSize)
        {
            return new JsonContentResult<PagedResponse<BirdResponseModel>>(await _mediator.Send(new GetBirdsQuery(page, pageSize)));
        }

    }
}
