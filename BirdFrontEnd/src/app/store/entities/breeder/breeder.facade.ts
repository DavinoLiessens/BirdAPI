import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBreeder, IBreedersResponse, IGetBreedersRequest } from 'src/app/types/breeder.types';
import { IPagination } from 'src/app/types/pagination.types';
import { IAppState } from '../../store.interface';
import * as actions from './breeder.actions';
import * as selectors from './breeder.selectors';

@Injectable()
export class BreederFacade {
    constructor(
        private store: Store<IAppState>,
    ) { }

    // Selectors
    public getBreeders(): Observable<IBreeder[]> {
        return this.store.select(selectors.selectBreeders);
    }

    public getPagination(): Observable<IPagination> {
        return this.store.select(selectors.selectPagination);
    }

    // Actions
    public getAllBreedersRequest(request: IGetBreedersRequest): void {
        console.log("Facade: ", request);
        this.store.dispatch(actions.getBreeders({ request }));
    }

    // ActionSubjects
    
}
