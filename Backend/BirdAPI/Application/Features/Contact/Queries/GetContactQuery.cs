using BirdAPI.Application.Features.Contact.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Contact.Queries
{
    public class GetContactQuery : IRequest<BaseResponse<ContactResponseModel>>
    {
        public int ContactId { get; set; }
        public GetContactQuery(int contactId)
        {
            ContactId = contactId;
        }
    }
}
