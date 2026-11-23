using Microsoft.AspNetCore.Authorization;
using BirdAPI.Application.Features.Contact.Commands;
using BirdAPI.Application.Features.Contact.Commands.InputModel;
using BirdAPI.Application.Features.Contact.Queries;
using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace BirdAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/v1/contacts")]
    public class ContactController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ContactController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetContacts(int? page, int? pageSize, string? searchValue)
        {
            return new JsonContentResult<PagedResponse<ContactResponseModel>>(await _mediator.Send(new GetContactsQuery(page, pageSize, searchValue)));
        }

        [HttpGet("{contactId}")]
        public async Task<IActionResult> GetContact(int contactId)
        {
            return new JsonContentResult<ContactResponseModel>(await _mediator.Send(new GetContactQuery(contactId)));
        }

        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] CreateContactInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new CreateContactCommand(model)));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateContact(int id, [FromBody] UpdateContactInputModel model)
        {
            return new JsonContentResult<object>(await _mediator.Send(new UpdateContactCommand(id, model)));
        }
    }
}
