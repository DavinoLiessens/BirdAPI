import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import {
  IBirdEgg,
  IBirdEggRequest,
  ICreateBirdEggRequest,
  IUpdateBirdEggRequest,
} from '../types/birdEgg.types';
import {
  ICouple,
  ICouplesResponse,
  ICreateCoupleRequest,
  ICreatedCoupleResponseModel,
  IGetCouplesRequest,
  IUpdateCoupleRequest,
} from '../types/couple.types';

@Injectable({
  providedIn: 'root',
})
export class CoupleService {
  constructor(private readonly httpService: BaseHttpService) {}

  getAllCouples(request: IGetCouplesRequest): Observable<ICouplesResponse> {
    return this.httpService.get<ICouplesResponse>('/couples', {
      params: request as any,
    });
  }

  getCouple(coupleId: number): Observable<ICouple> {
    return this.httpService.get<ICouple>(`/couples/${coupleId}`);
  }

  createCouple(
    request: ICreateCoupleRequest
  ): Observable<ICreatedCoupleResponseModel> {
    return this.httpService.post<ICreatedCoupleResponseModel>(
      '/couples',
      request
    );
  }

  updateCouple(request: IUpdateCoupleRequest): Observable<void> {
    return this.httpService.put<void>('/couples', request);
  }

  createBirdEgg(request: ICreateBirdEggRequest): Observable<void> {
    return this.httpService.post<void>('/couples/birdEggs', request);
  }

  updateBirdEgg(request: IUpdateBirdEggRequest): Observable<void> {
    return this.httpService.put<void>('/couples/birdEggs', request);
  }

  getCoupleBirdEgg(request: IBirdEggRequest): Observable<IBirdEgg> {
    return this.httpService.get<IBirdEgg>(
      `/couples/${request.coupleId}/birdEggs/${request.birdEggId}`
    );
  }
}
