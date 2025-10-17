import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import {
  ICreateOwnerRequest,
  IGetOwnersRequest,
  IOwner,
  IOwnersResponse,
  IUpdateOwnerRequest,
} from '../types/owner.types';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  constructor(private readonly httpService: BaseHttpService) {}

  getAllOwners(request: IGetOwnersRequest): Observable<IOwnersResponse> {
    return this.httpService.get<IOwnersResponse>('/owners', {
      params: request as any,
    });
  }

  getOwner(ownerId: number): Observable<IOwner> {
    return this.httpService.get<IOwner>(`/owners/${ownerId}`);
  }

  createOwner(request: ICreateOwnerRequest): Observable<void> {
    return this.httpService.post<void>('/owners', request);
  }

  updateOwner(request: IUpdateOwnerRequest): Observable<void> {
    return this.httpService.put<void>(`/owners/${request.id}`, request);
  }
}
