import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBird, ICreateBirdRequest, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';
import { IPagination } from 'src/app/types/pagination.types';
import { IAppState } from '../../store.interface';
import * as actions from './bird.actions';
import * as selectors from './bird.selectors';

@Injectable()
export class BirdFacade {
    constructor(
        private store: Store<IAppState>,
    ) { }

// Selectors
public getBirds(): Observable<IBird[]> {
    return this.store.select(selectors.selectBirds);
}

public getBird(): Observable<IBird> {
    return this.store.select(selectors.selectBird);
}

public getPagination(): Observable<IPagination> {
    return this.store.select(selectors.selectPagination);
}

// Actions
public getAllBirdsRequest(request: IGetBirdsRequest): void {
    this.store.dispatch(actions.getBirds({ request }));
}

public getBirdRequest(breederId: number): void {
    this.store.dispatch(actions.getBird({ breederId }));
}

public createBird(request: ICreateBirdRequest): void {
    this.store.dispatch(actions.createBird({ request }));
}

public updateBirdRequest(request: IUpdateBirdRequest): void {
    this.store.dispatch(actions.updateBird({ request }));
}

// ActionSubjects

    
}
