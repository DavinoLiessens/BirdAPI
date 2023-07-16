import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBirdEgg, IBirdEggRequest, ICreateBirdEggRequest, IUpdateBirdEggRequest } from 'src/app/types/birdEgg.types';
import { ICouple, ICouplesResponse, ICreateCoupleRequest, IGetCouplesRequest, IUpdateCoupleRequest } from 'src/app/types/couple.types';
import { IPagination } from 'src/app/types/pagination.types';
import { IAppState } from '../../store.interface';
import * as actions from './couple.actions';
import * as selectors from './couple.selectors';

@Injectable()
export class CoupleFacade {
    constructor(
        private store: Store<IAppState>,
        private action$: ActionsSubject
    ) { }

    // Selectors
    public getCouples(): Observable<ICouple[]> {
        return this.store.select(selectors.selectCouples);
    }

    public getCouple(): Observable<ICouple> {
        return this.store.select(selectors.selectCouple);
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

    public getLoadingModal(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingModal);
    }

    public getBirdEgg(): Observable<IBirdEgg> {
        return this.store.select(selectors.selectCoupleBirdEgg);
    }

    public clearDetail(): void {
        this.store.dispatch(actions.clearCoupleDetail());
    }

    public clearBirdEggDetail(): void {
        this.store.dispatch(actions.clearBirdEggDetail());
    }

    // Actions
    public getAllCouplesRequest(request: IGetCouplesRequest): void {
        this.store.dispatch(actions.getCouples({ request }));
    }

    public getCoupleRequest(coupleId: number): void {
        this.store.dispatch(actions.getCouple({ coupleId }));
    }

    public createCouple(request: ICreateCoupleRequest): void {
        this.store.dispatch(actions.createCouple({ request }));
    }

    public createBirdEgg(request: ICreateBirdEggRequest): void {
        this.store.dispatch(actions.createBirdEgg({ request }));
    }

    public updateBirdEggRequest(request: IUpdateBirdEggRequest): void {
        this.store.dispatch(actions.updateBirdEgg({ request }));
    }

    public getBirdEggRequest(request: IBirdEggRequest): void {
        this.store.dispatch(actions.getBirdEgg({ request }));
    }

    public updateCoupleRequest(request: IUpdateCoupleRequest): void {
        this.store.dispatch(actions.updateCouple({ request }));
    }

    // ActionSubjects
    public onCreateCoupleSuccess(): Observable<ICouple> {
        return this.action$.pipe(ofType(actions.createCoupleSuccess.type));
    }

    public onCreateCoupleError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createCoupleError.type));
    }

    public onCreateBirdEggSuccess(): Observable<ICouple> {
        return this.action$.pipe(ofType(actions.createBirdEggSuccess.type));
    }

    public onCreateBirdEggError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBirdEggError.type));
    }

    public onUpdateCoupleSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateCoupleSuccess.type));
    }

    public onUpdateCoupleError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateCoupleError.type));
    }

    public onUpdateBirdEggSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdEggSuccess.type));
    }

    public onUpdateBirdEggError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdEggError.type));
    }
}
