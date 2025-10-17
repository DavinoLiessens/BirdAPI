import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1), // Retry failed requests once
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    let errorMessage = 'Er is een onbekende fout opgetreden';
    let errorTitle = 'Fout';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Netwerk fout: ${error.error.message}`;
    } else {
      // Server-side error
      switch (error.status) {
        case 0:
          errorMessage =
            'Kan geen verbinding maken met de server. Controleer uw internetverbinding.';
          errorTitle = 'Verbindingsfout';
          break;
        case 400:
          errorMessage =
            'Ongeldige aanvraag. Controleer uw invoer en probeer opnieuw.';
          errorTitle = 'Ongeldige invoer';
          break;
        case 401:
          errorMessage = 'U bent niet geautoriseerd. Log opnieuw in.';
          errorTitle = 'Niet geautoriseerd';
          // Optionally redirect to login
          // this.router.navigate(['/login']);
          break;
        case 403:
          errorMessage =
            'Toegang geweigerd. U heeft geen rechten voor deze actie.';
          errorTitle = 'Toegang geweigerd';
          break;
        case 404:
          errorMessage = 'De gevraagde resource is niet gevonden.';
          errorTitle = 'Niet gevonden';
          break;
        case 409:
          errorMessage =
            'Conflict. De resource bestaat al of er is een dataconflict.';
          errorTitle = 'Conflict';
          break;
        case 422:
          errorMessage = 'Validatiefout. Controleer uw invoer.';
          errorTitle = 'Validatiefout';
          break;
        case 500:
          errorMessage = 'Interne serverfout. Probeer het later opnieuw.';
          errorTitle = 'Serverfout';
          break;
        case 503:
          errorMessage = 'Service niet beschikbaar. Probeer het later opnieuw.';
          errorTitle = 'Service niet beschikbaar';
          break;
        default:
          errorMessage = `Er is een fout opgetreden (${error.status}). Probeer het opnieuw.`;
      }

      // Try to get more specific error message from response
      if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.error?.summary?.[0]) {
        errorMessage = error.error.summary[0];
      }
    }

    // Don't show toast for certain status codes that should be handled specifically
    if (![401, 403].includes(error.status)) {
      this.toastr.error(errorMessage, errorTitle, {
        timeOut: 6000,
        closeButton: true,
        progressBar: true,
      });
    }

    // Log error for debugging
    console.error('HTTP Error:', {
      status: error.status,
      statusText: error.statusText,
      url: error.url,
      message: errorMessage,
      error: error.error,
    });
  }
}
