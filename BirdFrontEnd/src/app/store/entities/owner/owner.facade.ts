import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IGetOwnersRequest, IOwner } from "src/app/types/owner.types";
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

    public getPagination(): Observable<IPagination> {
        return this.store.select(selectors.selectPagination);
    }
    
    // Actions
    public getAllOwnersRequest(request: IGetOwnersRequest): void {
        this.store.dispatch(actions.getOwners({ request }));
    }

    // ActionSubjects

}
