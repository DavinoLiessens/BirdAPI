using BirdAPI.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using System.Net;

namespace BirdAPI.BaseModels
{
    public sealed class JsonContentResult<T> : ContentResult
    {
        public JsonContentResult(ModelStateDictionary modelState)
        {
            ContentType = "application/json";
            Handle(modelState);
        }

        public JsonContentResult(BaseResponse<T> responseModel)
        {
            ContentType = "application/json";
            Handle(responseModel);
        }

        public JsonContentResult()
        {
            ContentType = "application/json";
        }

        public void Handle(BaseResponse<T> responseModel)
        {
            StatusCode = (int)responseModel.StatusCode;

            if (responseModel.StatusCode == HttpStatusCode.NoContent)
                return;

            if (responseModel.Success)
            {
                Content = JsonSerializer.SerializeObject(responseModel.Result);
            }
            else
            {
                var errors = new Dictionary<string, dynamic>();
                errors.Add("isSystemMessage", false);

                foreach (var error in responseModel.Errors)
                {
                    switch (error)
                    {
                        case HttpError httpError:
                            if (errors.ContainsKey("summary"))
                            {
                                errors["summary"] = ((string[])errors["summary"]).Append(httpError.ErrorMessage).ToArray();
                            }
                            else
                            {
                                errors.Add("summary", new string[] { httpError.ErrorMessage });
                            }
                            break;
                        case ArgumentError argumentError:
                            if (errors.ContainsKey(argumentError.Key.CamelCase()))
                            {
                                errors[argumentError.Key.CamelCase()] = errors[argumentError.Key.CamelCase()].Concat(argumentError.ErrorMessages).ToArray();
                            }
                            else
                            {
                                errors.Add(argumentError.Key, argumentError.ErrorMessages.ToArray());
                            }
                            break;
                    }
                }
                Content = JsonSerializer.SerializeObject(errors);
            }
        }

        public void Handle(ModelStateDictionary modelStateDictionary)
        {
            StatusCode = (int)HttpStatusCode.BadRequest;

            var errors = modelStateDictionary.Select(m => new
            {
                Key = m.Key.CamelCase(),
                Errors = m.Value.Errors.Select(e => e.ErrorMessage).ToArray()
            }).ToList();

            var errorsFormatted = new Dictionary<string, dynamic>();
            errorsFormatted.Add("isSystemMessage", false);

            foreach (var modelstate in errors)
            {
                if (errorsFormatted.ContainsKey(modelstate.Key))
                {
                    errorsFormatted[modelstate.Key] = ((string[])errorsFormatted[modelstate.Key]).Concat(modelstate.Errors).ToArray();
                }
                else
                {
                    errorsFormatted.Add(modelstate.Key, modelstate.Errors);
                }
            }

            Content = JsonSerializer.SerializeObject(errorsFormatted);
        }
    }

    public sealed class JsonSerializer
    {
        private static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            ContractResolver = new JsonContractResolver(),
            NullValueHandling = NullValueHandling.Ignore,
            Converters = new List<JsonConverter>() { new StringEnumConverter() },
            DateTimeZoneHandling = DateTimeZoneHandling.Utc
        };

        public static string SerializeObject(object o)
        {
            return JsonConvert.SerializeObject(o, Formatting.Indented, Settings);
        }

        public sealed class JsonContractResolver : CamelCasePropertyNamesContractResolver
        {
        }
    }
}
