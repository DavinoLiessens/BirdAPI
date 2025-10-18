import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import {
  IBreeder,
  IBreedersResponse,
  ICreateBreederRequest,
  IGetBreedersRequest,
  IUpdateBreederRequest,
} from '../types/breeder.types';

@Injectable({
  providedIn: 'root',
})
export class BreederService {
  constructor(private readonly httpService: BaseHttpService) {}

  getAllBreeders(request: IGetBreedersRequest): Observable<IBreedersResponse> {
    return this.httpService.get<IBreedersResponse>('/breeders', {
      params: request as any,
    });
  }

  getBreeder(breederId: number): Observable<IBreeder> {
    return this.httpService.get<IBreeder>(`/breeders/${breederId}`);
  }

  createBreeder(request: ICreateBreederRequest): Observable<void> {
    return this.httpService.post<void>('/breeders', request);
  }

  updateBreeder(request: IUpdateBreederRequest): Observable<void> {
    return this.httpService.put<void>(`/breeders/${request.id}`, request);
  }
}
