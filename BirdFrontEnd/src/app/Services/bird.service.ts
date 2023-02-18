import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService, Bird, ChangeBird, CreateBird } from './api.service';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
@Injectable({
  providedIn: 'root'
})
export class BirdService {

  public Birds: Bird[];

  constructor(private apiService: ApiService, private baseService: BaseService) { }

  // GET
  public getBirds(request: any): Observable<any> {
      return this.baseService.get('/birds', request);
  }

  // OLD DATA
  GetAllBirds(){
      return this.apiService.GetAllBirds();
  }

  GetBird(id: number){
    return this.apiService.GetBird(id);
  }

  CreateBird(newBird: CreateBird){
    return this.apiService.CreateBird(newBird);
  }

  UpdateBird(id: number, updateBird: ChangeBird){
    return this.apiService.UpdateBird(id, updateBird);
  }

  DeleteBird(id: number){
    return this.apiService.DeleteBird(id);
  }
}
