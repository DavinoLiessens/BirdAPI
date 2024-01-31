import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, Bird, ChangeBird, CreateBird } from './api.service';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { IBird, IBirdShow, IBirdsResponse, ICreateBirdRequest, ICreateBirdShowRequest, IGetBirdsRequest, IUpdateBirdRequest, IUpdateBirdShowRequest } from '../types/bird.types';
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

  public getBirdShow(birdId: number, id: number): Observable<IBirdShow> {
    return this.baseService.get(`/birds/${birdId}/birdshow/${id}`) as Observable<IBirdShow>;
  }

  public createBirdShow(request: ICreateBirdShowRequest): Observable<null> {
    return this.baseService.post(`/birds/${request.birdId}/birdshow`, request) as Observable<null>;
  }

  public updateBirdShow(id: number, request: IUpdateBirdShowRequest): Observable<null> {
    return this.baseService.put(`/birds/${request.birdId}/birdshow/${id}`, request) as Observable<null>;
  }  
}
