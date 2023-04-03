import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ICreateOwnerRequest, IGetOwnersRequest, IOwner, IUpdateOwnerRequest } from "src/app/types/owner.types";
import { IPagination } from "src/app/types/pagination.types";
import { IAppState } from "../../store.interface";
import * as actions from './owner.actions';
import * as selectors from './owner.selectors';

@Injectable()
export class OwnerFacade {
    constructor(
        private store: Store<IAppState>,
    ) { }
    
    // Selectors
    public getOwners(): Observable<IOwner[]> {
        return this.store.select(selectors.selectOwners);
    }

    public getOwner(): Observable<IOwner> {
        return this.store.select(selectors.selectOwner);
    }

    public getPagination(): Observable<IPagination> {
        return this.store.select(selectors.selectPagination);
    }
    
    public getLoading(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingAll);
    }
    
    public getLoadingDetail(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingDetail);
    }
    
    // Actions
    public getAllOwnersRequest(request: IGetOwnersRequest): void {
        this.store.dispatch(actions.getOwners({ request }));
    }

    public getOwnerRequest(ownerId: number): void {
        this.store.dispatch(actions.getOwner({ ownerId }));
    }

    public createOwner(request: ICreateOwnerRequest): void {
        this.store.dispatch(actions.createOwner({ request }));
    }

    public updateOwnerRequest(request: IUpdateOwnerRequest): void {
        this.store.dispatch(actions.updateOwner({ request }));
    }

    // ActionSubjects

}
