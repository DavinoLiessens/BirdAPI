import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateOwnerRequest, IGetOwnersRequest, IOwner, IOwnersResponse, IUpdateOwnerRequest } from '../types/owner.types';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private baseService: BaseService) { }

  public getAllOwners(request: IGetOwnersRequest): Observable<IOwnersResponse> {
    return this.baseService.get(`/owners`, request) as Observable<IOwnersResponse>;
  }

  public getOwner(breederId: number): Observable<IOwner> {
    return this.baseService.get(`/owners/${breederId}`) as Observable<IOwner>;
  }

  public createOwner(request: ICreateOwnerRequest): Observable<null> {
    return this.baseService.post(`/owners`, request) as Observable<null>;
  }

  public updateOwner(request: IUpdateOwnerRequest): Observable<null> {
    return this.baseService.put(`/owners/${request.id}`, request) as Observable<null>;
  }
}
