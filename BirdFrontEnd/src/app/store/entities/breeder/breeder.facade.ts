import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBreedersResponse, IGetBreedersRequest } from 'src/app/types/breeder.types';
import { IAppState } from '../../store.interface';
import * as actions from './breeder.actions';
import * as selectors from './breeder.selectors';

@Injectable()
export class BreederFacade {
    constructor(
        private store: Store<IAppState>,
    ) { }

    // Selectors

    // Actions
    public getAllBreeders(request: IGetBreedersRequest): void {
        this.store.dispatch(actions.getBreeders({ request }));
    }

    // ActionSubjects
    
}
