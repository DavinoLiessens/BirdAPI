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
    }
}
