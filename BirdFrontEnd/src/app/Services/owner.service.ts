import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetOwnersRequest, IOwnersResponse } from '../types/owner.types';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private baseService: BaseService) { }

  public getAllOwners(request: IGetOwnersRequest): Observable<IOwnersResponse> {
    return this.baseService.get(`/owners`, request) as Observable<IOwnersResponse>;
  }
}
