import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBreeder, IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest, IUpdateBreederRequest } from "../types/breeder.types";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
  })
  export class BreederService { 

    constructor(private baseService: BaseService) { }

    public getAllBreeders(request: IGetBreedersRequest): Observable<IBreedersResponse> {
        return this.baseService.get(`/breeders`, request) as Observable<IBreedersResponse>;
    }

    public getBreeder(breederId: number): Observable<IBreeder> {
      return this.baseService.get(`/breeders/${breederId}`) as Observable<IBreeder>;
    }

    public createBreeder(request: ICreateBreederRequest): Observable<null> {
      return this.baseService.post(`/breeders`, request) as Observable<null>;
    }

    public updateBreeder(request: IUpdateBreederRequest): Observable<null> {
      return this.baseService.put(`/breeders/${request.id}`, request) as Observable<null>;
    }

  }
  