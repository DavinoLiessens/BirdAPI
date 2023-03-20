using BirdAPI.Application.Features.Owner.Commands;
using BirdAPI.Application.Features.Owner.Commands.InputModel;
using BirdAPI.Application.Features.Owner.Queries;
using BirdAPI.Application.Features.Owner.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Route("api/v1/owners")]
    public class OwnerController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OwnerController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetOwners(int? page, int? pageSize)
        {
            return new JsonContentResult<PagedResponse<OwnerResponseModel>>(await _mediator.Send(new GetOwnersQuery(page, pageSize)));
        }

        [HttpGet("{ownerId}")]
        public async Task<IActionResult> GetOwner(int ownerId)
        {
            return new JsonContentResult<OwnerResponseModel>(await _mediator.Send(new GetOwnerQuery(ownerId)));
        }

        [HttpPost]
        public async Task<IActionResult> CreateOwner([FromBody] CreateOwnerInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new CreateOwnerCommand(model)));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOwner(int id, [FromBody] UpdateOwnerInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new UpdateOwnerCommand(id, model)));
        }
    }
}
