import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import {
  catchError,
  retry,
  retryWhen,
  mergeMap,
  finalize,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface ApiError {
  message: string;
  status: number;
  statusText: string;
  url?: string;
}

export interface RequestOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  params?: HttpParams | { [param: string]: string | string[] };
  retries?: number;
  retryDelay?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  private readonly baseUrl = environment.webApiBaseUrl;
  private readonly defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private readonly http: HttpClient) {}

  get<T>(endpoint: string, options: RequestOptions = {}): Observable<T> {
    return this.makeRequest<T>('GET', endpoint, null, options);
  }

  post<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Observable<T> {
    return this.makeRequest<T>('POST', endpoint, data, options);
  }

  put<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Observable<T> {
    return this.makeRequest<T>('PUT', endpoint, data, options);
  }

  delete<T>(endpoint: string, options: RequestOptions = {}): Observable<T> {
    return this.makeRequest<T>('DELETE', endpoint, null, options);
  }

  patch<T>(
    endpoint: string,
    data: any,
    options: RequestOptions = {}
  ): Observable<T> {
    return this.makeRequest<T>('PATCH', endpoint, data, options);
  }

  private makeRequest<T>(
    method: string,
    endpoint: string,
    data: any,
    options: RequestOptions
  ): Observable<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = options.headers || this.defaultHeaders;
    const params = options.params;
    const retries = options.retries ?? 2;
    const retryDelay = options.retryDelay ?? 1000;

    const httpOptions = { headers, params };

    let request$: Observable<T>;

    switch (method) {
      case 'GET':
        request$ = this.http.get<T>(url, httpOptions);
        break;
      case 'POST':
        request$ = this.http.post<T>(url, data, httpOptions);
        break;
      case 'PUT':
        request$ = this.http.put<T>(url, data, httpOptions);
        break;
      case 'DELETE':
        request$ = this.http.delete<T>(url, httpOptions);
        break;
      case 'PATCH':
        request$ = this.http.patch<T>(url, data, httpOptions);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return request$.pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, i) => {
            const retryAttempt = i + 1;
            // Only retry on server errors (5xx) or network errors
            if (retryAttempt <= retries && this.shouldRetry(error)) {
              console.warn(
                `Retry attempt ${retryAttempt} for ${method} ${url}`
              );
              return timer(retryDelay * retryAttempt);
            }
            return throwError(error);
          })
        )
      ),
      catchError((error: HttpErrorResponse) =>
        this.handleError(error, method, url)
      )
    );
  }

  private shouldRetry(error: HttpErrorResponse): boolean {
    // Retry on server errors (5xx) or network errors (0)
    return error.status >= 500 || error.status === 0;
  }

  private handleError(
    error: HttpErrorResponse,
    method: string,
    url: string
  ): Observable<never> {
    const apiError: ApiError = {
      message: this.getErrorMessage(error),
      status: error.status,
      statusText: error.statusText,
      url,
    };

    console.error(`HTTP Error [${method} ${url}]:`, apiError);

    // Don't show toast for 401/403 as these should be handled by auth interceptor
    if (error.status !== 401 && error.status !== 403) {
      // Let individual services handle their own error messaging
      // this.toastrService.error(apiError.message, 'Request Failed');
    }

    return throwError(apiError);
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      return `Network error: ${error.error.message}`;
    }

    // Server-side error
    if (error.error?.message) {
      return error.error.message;
    }

    if (error.error?.summary?.[0]) {
      return error.error.summary[0];
    }

    switch (error.status) {
      case 0:
        return 'Unable to connect to the server. Please check your internet connection.';
      case 400:
        return 'Bad request. Please check your input and try again.';
      case 401:
        return 'Unauthorized. Please log in again.';
      case 403:
        return 'Access denied. You do not have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 409:
        return 'Conflict. The resource already exists or there is a data conflict.';
      case 500:
        return 'Internal server error. Please try again later.';
      case 503:
        return 'Service unavailable. Please try again later.';
      default:
        return `An unexpected error occurred (${error.status}). Please try again.`;
    }
  }
}
