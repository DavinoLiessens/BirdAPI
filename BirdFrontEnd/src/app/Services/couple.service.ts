import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICouple, ICouplesResponse, ICreateCoupleRequest, IGetCouplesRequest, IUpdateCoupleRequest } from "../types/couple.types";
import { BaseService } from "./base.service";

@Injectable({
    providedIn: 'root'
  })
  export class CoupleService { 

    constructor(private baseService: BaseService) { }

    public getAllCouples(request: IGetCouplesRequest): Observable<ICouplesResponse> {
        return this.baseService.get(`/couples`, request) as Observable<ICouplesResponse>;
    }

    public getCouple(coupleId: number): Observable<ICouple> {
      return this.baseService.get(`/couples/${coupleId}`) as Observable<ICouple>;
    }

    public createCouple(request: ICreateCoupleRequest): Observable<null> {
      return this.baseService.post(`/couples`, request) as Observable<null>;
    }

    public updateCouple(request: IUpdateCoupleRequest): Observable<null> {
      return this.baseService.put(`/couples`, request) as Observable<null>;
    }

  }
  