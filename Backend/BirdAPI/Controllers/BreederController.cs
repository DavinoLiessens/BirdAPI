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
        public async Task<IActionResult> GetBreeders(int? page, int? pageSize)
        {
            return new JsonContentResult<PagedResponse<BreederResponseModel>>(await _mediator.Send(new GetBreedersQuery(page, pageSize)));
        }

        [HttpPost]
        public async Task<IActionResult> CreateBreeder([FromBody] CreateBreederInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new CreateBreederCommand(model)));
        }
    }
}
