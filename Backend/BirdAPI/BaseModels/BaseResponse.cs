using System.Net;

namespace BirdAPI.BaseModels
{
    public class BaseResponse<T>
    {
        public T Result { get; }
        public bool Success { get; }
        public IEnumerable<IError> Errors { get; private set; }
        public HttpStatusCode StatusCode { get; }

        public BaseResponse(T result, bool success = true, HttpStatusCode httpStatusCode = HttpStatusCode.OK)
        {
            Result = result;
            StatusCode = httpStatusCode;
            Success = success;
            Errors = null;
        }

        public BaseResponse(bool success = true, HttpStatusCode httpStatusCode = HttpStatusCode.OK)
        {
            StatusCode = httpStatusCode;
            Success = success;
            Errors = null;
        }

        public BaseResponse<T> AddError(string error, string argumentName = null)
        {
            if (string.IsNullOrEmpty(argumentName))
            {
                if (Errors == null)
                {
                    Errors = new List<IError>() { new HttpError(error) };
                }
                else
                {
                    var errors = Errors.ToList();
                    errors.Add(new HttpError(error));

                    Errors = errors;
                }
            }
            else
            {
                if (Errors == null)
                {
                    Errors = new List<IError>() { new ArgumentError(argumentName, error) };
                }
                else
                {
                    var existingArgumentErrors = Errors.OfType<ArgumentError>().FirstOrDefault(e => e.Key == argumentName);

                    if (existingArgumentErrors != null)
                    {
                        existingArgumentErrors.AddErrorMessage(error);
                    }
                    else
                    {
                        var errors = Errors.ToList();
                        errors.Add(new ArgumentError(argumentName, error));

                        Errors = errors;
                    }
                }
            }


            return this;
        }

        public BaseResponse<T> AddErrors(IEnumerable<string> errors, string argumentName = null)
        {
            if (string.IsNullOrEmpty(argumentName))
            {
                if (Errors == null)
                {
                    Errors = errors.Select(e => new HttpError(e)).ToList();
                }
                else
                {
                    var currentErrors = Errors.ToList();
                    currentErrors.AddRange(errors.Select(e => new HttpError(e)).ToList());

                    Errors = currentErrors;
                }
            }
            else
            {
                if (Errors == null)
                {
                    Errors = new List<IError>()
                    {
                        new ArgumentError(argumentName, errors.ToArray())
                    };
                }
                else
                {
                    var existingArgumentErrors = Errors.OfType<ArgumentError>().FirstOrDefault(e => e.Key == argumentName);

                    if (existingArgumentErrors != null)
                    {
                        existingArgumentErrors.AddErrorMessages(errors.ToArray());
                    }
                    else
                    {
                        var currentErrors = Errors.ToList();
                        currentErrors.Add(new ArgumentError(argumentName, errors.ToArray()));

                        Errors = currentErrors;
                    }
                }
            }

            return this;
        }
    }

    public interface IError
    {

    }

    public class ArgumentError : IError
    {
        protected ArgumentError()
            : base()
        {
            ErrorMessages = new List<string>();
        }

        public ArgumentError(string key, string errorMessage)
            : this()
        {
            Key = key;
            AddErrorMessage(errorMessage);
        }

        public ArgumentError(string key, string[] errorMessages)
        {
            Key = key;
            AddErrorMessages(errorMessages);
        }

        public void AddErrorMessage(string errorMessage)
        {
            ErrorMessages.Add(errorMessage);
        }

        public void AddErrorMessages(string[] errorMessages)
        {
            ErrorMessages.AddRange(errorMessages.ToList());
        }

        public string Key { get; private set; }
        public List<string> ErrorMessages { get; private set; }
    }

    public class HttpError : IError
    {
        public HttpError(string errorMessage)
        {
            ErrorMessage = errorMessage;
        }

        public string ErrorMessage { get; private set; }
    }
}
