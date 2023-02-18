import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class BaseService {
    baseUrl = '';
    token = '';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    fileHeaders = new HttpHeaders({ 'Content-Type': 'application/pdf' });

    constructor(
        private httpClient: HttpClient,
        private toastrService: ToastrService,
    ) {
        this.baseUrl = environment.webApiBaseUrl;
    }

    public get(url: string, params?: any) {
        return this.httpClient.get(`${this.baseUrl}${url}`, {
            headers: this.headers,
            params
        })
        .pipe(
            // retry(2),
            catchError(this.handleError),
        );
      }

    public getFile(url: string, params?: any) {
        return this.httpClient.get(`${this.baseUrl}${url}`, {
            headers: this.fileHeaders,
            params,
            responseType: 'blob',
        })
        .pipe(
            // retry(2),
            catchError(this.handleError),
        );
      }

    public post(url: string, object: any) {
        return this.httpClient
        .post(`${this.baseUrl}${url}`, object, { headers: this.headers })
        .pipe(
            delay(250),
            // retry(2),
            catchError(this.handleError),
        );
    }

    public postFile(url: string, object: any) {
        return this.httpClient
        .post(`${this.baseUrl}${url}`, object) // Do not explicitly set http headers when posting files
        .pipe(
            delay(250),
            // retry(2),
            catchError(this.handleError),
        );
    }

    public put(url: string, object: any) {
        return this.httpClient
        .put(`${this.baseUrl}${url}`, object, { headers: this.headers })
        .pipe(
            delay(250),
            // retry(2),
            catchError(this.handleError),
        );
    }

    public delete(url: string, object?: any) {
        const httpOptions = {
            headers: this.headers,
            body: object
        };

        return this.httpClient
            .delete(`${this.baseUrl}${url}`, httpOptions)
            .pipe(
                // retry(2),
                catchError(this.handleError),
            );
    }

    // Handle API errors
    public handleError = (response: HttpErrorResponse) => {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(response);

        // return an observable with a user-facing error message
        const title = "An error occured";
        const message = "Something bad happened. Please try again later.";

        const errorMessage = response.error.summary ? response.error.summary[0] : message;

        this.toastrService.error(errorMessage, title, {
            timeOut: 6000,
        });

        return throwError(response);
  }
}
