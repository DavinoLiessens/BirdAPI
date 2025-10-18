import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingCount = 0;

  readonly loading$: Observable<boolean> = this.loadingSubject.asObservable();

  startLoading(): void {
    this.loadingCount++;
    if (this.loadingCount === 1) {
      this.loadingSubject.next(true);
    }
  }

  stopLoading(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    if (this.loadingCount === 0) {
      this.loadingSubject.next(false);
    }
  }

  forceStopLoading(): void {
    this.loadingCount = 0;
    this.loadingSubject.next(false);
  }

  get isLoading(): boolean {
    return this.loadingSubject.value;
  }
}
