import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IBreedersResponse, IGetBreedersRequest } from "../types/breeder.types";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
  })
  export class BreederService { 

    constructor(private baseService: BaseService) { }

    public getAllBreeders(request: IGetBreedersRequest): Observable<IBreedersResponse> {
        return this.baseService.get(`/breeders`, request) as Observable<IBreedersResponse>;
    }

  }