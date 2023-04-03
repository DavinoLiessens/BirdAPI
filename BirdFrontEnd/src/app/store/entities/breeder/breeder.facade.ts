import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBreeder, IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest, IUpdateBreederRequest } from 'src/app/types/breeder.types';
import { IPagination } from 'src/app/types/pagination.types';
import { IAppState } from '../../store.interface';
import * as actions from './breeder.actions';
import * as selectors from './breeder.selectors';

@Injectable()
export class BreederFacade {
    constructor(
        private store: Store<IAppState>,
        private action$: ActionsSubject
    ) { }

    // Selectors
    public getBreeders(): Observable<IBreeder[]> {
        return this.store.select(selectors.selectBreeders);
    }

    public getBreeder(): Observable<IBreeder> {
        return this.store.select(selectors.selectBreeder);
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
    public getAllBreedersRequest(request: IGetBreedersRequest): void {
        this.store.dispatch(actions.getBreeders({ request }));
    }

    public getBreederRequest(breederId: number): void {
        this.store.dispatch(actions.getBreeder({ breederId }));
    }

    public createBreeder(request: ICreateBreederRequest): void {
        this.store.dispatch(actions.createBreeder({ request }));
    }

    public updateBreederRequest(request: IUpdateBreederRequest): void {
        this.store.dispatch(actions.updateBreeder({ request }));
    }

    // ActionSubjects
    public onCreateBreederSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBreederSuccess.type));
    }

    public onCreateBreederError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBreederError.type));
    }

    public onUpdateBreederSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBreederSuccess.type));
    }

    public onUpdateBreederError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBreederError.type));
    }
}
