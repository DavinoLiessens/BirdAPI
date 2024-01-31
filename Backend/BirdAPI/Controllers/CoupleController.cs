using BirdAPI.Application.Features.Couple.Commands;
using BirdAPI.Application.Features.Couple.Commands.InputModels;
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
        public async Task<IActionResult> GetCouples(int? page, int? pageSize, string? searchValue)
        {
            return new JsonContentResult<PagedResponse<CouplesResponseModel>>(await _mediator.Send(new GetCouplesQuery(page, pageSize, searchValue)));
        }

        [HttpGet("{coupleId}")]
        public async Task<IActionResult> GetCouple(int coupleId)
        {
            return new JsonContentResult<CoupleResponseModel>(await _mediator.Send(new GetCoupleQuery(coupleId)));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCouple([FromBody] CreateCoupleInputModel model)
        {
            return new JsonContentResult<CreatedCoupleResponseModel>(await _mediator.Send(new CreateCoupleCommand(model)));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCouple([FromBody] UpdateCoupleInputModel model)
        {
            return new JsonContentResult<CoupleResponseModel>(await _mediator.Send(new UpdateCoupleCommand(model)));
        }

        [HttpPost("birdEggs")]
        public async Task<IActionResult> CreateCoupleBirdEgg([FromBody] BirdEggInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new CreateCoupleBirdEggCommand(model)));
        }

        [HttpPut("birdEggs")]
        public async Task<IActionResult> UpdateCoupleBirdEgg([FromBody] BirdEggInputModel model)
        {
            return new JsonContentResult<BirdEggInputModel>(await _mediator.Send(new UpdateCoupleBirdEggCommand(model)));
        }

        [HttpGet("{coupleId}/birdEggs/{birdEggId}")]
        public async Task<IActionResult> GetCoupleBirdEgg(int coupleId, int birdEggId)
        {
            return new JsonContentResult<BirdEggResponseModel>(await _mediator.Send(new GetCoupleBirdEggQuery(coupleId, birdEggId)));
        }
    }
}
