import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, Bird, ChangeBird, CreateBird } from './api.service';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { IBird, IBirdsResponse, ICreateBirdRequest, IGetBirdsRequest, IUpdateBirdRequest } from '../types/bird.types';
import { SelectItemGroup } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class BirdService {

  constructor(private baseService: BaseService) { }

  public getBirds(request: IGetBirdsRequest): Observable<IBirdsResponse> {
      return this.baseService.get('/birds', request) as Observable<IBirdsResponse>;
  }

  public getBird(birdId: number): Observable<IBird> {
    return this.baseService.get(`/birds/${birdId}`) as Observable<IBird>;
  }

  public createBird(request: ICreateBirdRequest): Observable<null> {
    return this.baseService.post(`/birds`, request) as Observable<null>;
  }

  public updateBird(request: IUpdateBirdRequest): Observable<IBird> {
    return this.baseService.put(`/birds/${request.id}`, request) as Observable<IBird>;
  }  
}
