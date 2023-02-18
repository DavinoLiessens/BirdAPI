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
    }
}
