using BirdAPI.Application.Features.Couple.Queries;
using BirdAPI.Application.Features.Couple.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Route("api/v1/couples")]
    public class CoupleController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CoupleController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetCouples(int? page, int? pageSize)
        {
            return new JsonContentResult<PagedResponse<CouplesResponseModel>>(await _mediator.Send(new GetCouplesQuery(page, pageSize)));
        }

        [HttpGet("{coupleId}")]
        public async Task<IActionResult> GetCouple(int coupleId)
        {
            //return new JsonContentResult<CoupleResponseModel>(await _mediator.Send(new GetCoupleQuery(coupleId)));
            return Ok();
        }
    }
}
