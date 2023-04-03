import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
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
        private action$: ActionsSubject
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

    public getLoading(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingAll);
    }

    public getLoadingDetail(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingDetail);
    }

    // Actions
    public getAllBirdsRequest(request: IGetBirdsRequest): void {
        this.store.dispatch(actions.getBirds({ request }));
    }

    public getBirdRequest(birdId: number): void {
        this.store.dispatch(actions.getBird({ birdId }));
    }

    public createBird(request: ICreateBirdRequest): void {
        this.store.dispatch(actions.createBird({ request }));
    }

    public updateBirdRequest(request: IUpdateBirdRequest): void {
        this.store.dispatch(actions.updateBird({ request }));
    }

    // ActionSubjects
    public onCreateBirdSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBirdSuccess.type));
    }

    public onCreateBirdError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBirdError.type));
    }

    public onUpdateBirdSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdSuccess.type));
    }

    public onUpdateBirdError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdError.type));
    }
}
