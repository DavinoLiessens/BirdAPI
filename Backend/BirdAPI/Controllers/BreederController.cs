using BirdAPI.Application.Features.Breeder.Commands;
using BirdAPI.Application.Features.Breeder.Commands.InputModel;
using BirdAPI.Application.Features.Breeder.Queries;
using BirdAPI.Application.Features.Breeder.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Route("api/v1/breeders")]
    public class BreederController
    {
        private readonly IMediator _mediator;

        public BreederController(IMediator mediator)
        {
            _mediator = mediator;
        }


        [HttpGet]
        public async Task<IActionResult> GetBreeders(int? page, int? pageSize, string? searchValue)
        {
            return new JsonContentResult<PagedResponse<BreederResponseModel>>(await _mediator.Send(new GetBreedersQuery(page, pageSize, searchValue)));
        }

        [HttpGet("{breederId}")]
        public async Task<IActionResult> GetBreeder(int breederId)
        {
            return new JsonContentResult<BreederResponseModel>(await _mediator.Send(new GetBreederQuery(breederId)));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBreeder([FromBody] CreateBreederInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new CreateBreederCommand(model)));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBreeder(int id, [FromBody] UpdateBreederInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new UpdateBreederCommand(id, model)));
        }
    }
}
