import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import {
  IBird,
  IBirdDetail,
  IBirdShow,
  IBirdsResponse,
  ICreateBirdRequest,
  ICreateBirdShowRequest,
  IGetBirdsRequest,
  IUpdateBirdRequest,
  IUpdateBirdShowRequest,
} from '../types/bird.types';

@Injectable({
  providedIn: 'root',
})
export class BirdService {
  constructor(private readonly httpService: BaseHttpService) {}

  getBirds(request: IGetBirdsRequest): Observable<IBirdsResponse> {
    return this.httpService.get<IBirdsResponse>('/birds', {
      params: request as any,
    });
  }

  getBird(birdId: number): Observable<IBirdDetail> {
    return this.httpService.get<IBirdDetail>(`/birds/${birdId}`);
  }

  createBird(request: ICreateBirdRequest): Observable<void> {
    return this.httpService.post<void>('/birds', request);
  }

  updateBird(request: IUpdateBirdRequest): Observable<IBirdDetail> {
    return this.httpService.put<IBirdDetail>(`/birds/${request.id}`, request);
  }

  getBirdShow(birdId: number, id: number): Observable<IBirdShow> {
    return this.httpService.get<IBirdShow>(`/birds/${birdId}/birdshow/${id}`);
  }

  createBirdShow(request: ICreateBirdShowRequest): Observable<void> {
    return this.httpService.post<void>(
      `/birds/${request.birdId}/birdshow`,
      request
    );
  }

  updateBirdShow(
    id: number,
    request: IUpdateBirdShowRequest
  ): Observable<void> {
    return this.httpService.put<void>(
      `/birds/${request.birdId}/birdshow/${id}`,
      request
    );
  }
}
