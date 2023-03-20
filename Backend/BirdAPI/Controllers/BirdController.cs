using BirdAPI.Application.Features.Bird.Commands;
using BirdAPI.Application.Features.Bird.Commands.InputModels;
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

        [HttpGet("{birdId}")]
        public async Task<IActionResult> GetBird(int birdId)
        {
            return new JsonContentResult<BirdResponseModel>(await _mediator.Send(new GetBirdQuery(birdId)));
        }

        [HttpPost]
        public async Task<IActionResult> AddBird([FromBody] BirdInputModel model)
        {
            var command = new AddBirdCommand(model);
            return new JsonContentResult<BirdResponseModel>(await _mediator.Send(command));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBird(int id, [FromBody] UpdateBirdInputModel model)
        {
            var command = new UpdateBirdCommand(id, model);
            return new JsonContentResult<BirdResponseModel>(await _mediator.Send(command));
        }

    }
}
