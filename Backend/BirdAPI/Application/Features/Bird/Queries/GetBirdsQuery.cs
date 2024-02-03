using BirdAPI.Application.Features.Bird.ResponseModels;
using BirdAPI.BaseModels;
using MediatR;

namespace BirdAPI.Application.Features.Bird.Queries
{
    public class GetBirdsQuery : IRequest<BaseResponse<PagedResponse<BirdResponseModel>>>
    {
        public int? Page { get; set; }
        public int? PageSize { get; set; }
        public string? SearchValue { get; set; }
        public string? Gender { get; set; }
        public string? TypeOfBird { get; set; }
        public string? Year { get; set; }

        public GetBirdsQuery(int? page, int? pageSize, string? searchValue, string? gender, string? typeOfBird, string? year)
        {
            Page = page;
            PageSize = pageSize;
            SearchValue = searchValue;
            Gender = gender;
            TypeOfBird = typeOfBird;
            Year = year;
        }
    }
}
