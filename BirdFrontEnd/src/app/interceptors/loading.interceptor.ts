import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../Services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Skip loading indicator for certain requests
    if (this.shouldSkipLoading(req)) {
      return next.handle(req);
    }

    this.loadingService.startLoading();

    return next.handle(req).pipe(
      finalize(() => {
        this.loadingService.stopLoading();
      })
    );
  }

  private shouldSkipLoading(req: HttpRequest<any>): boolean {
    // Skip loading for certain endpoints or request types
    const skipLoadingPatterns = ['/health', '/ping', '/status'];

    return skipLoadingPatterns.some((pattern) => req.url.includes(pattern));
  }
}
