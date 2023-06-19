import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CoupleService } from 'src/app/Services/couple.service';
import { ICouple, ICouplesResponse, ICreateCoupleRequest, IGetCouplesRequest, IUpdateCoupleRequest } from 'src/app/types/couple.types';
import * as actions from './couple.actions';

@Injectable()
export class CoupleEffects {
    constructor(
        private actions$: Actions,
        private couplesService: CoupleService
    ) { }

    // fetch couples
    getCouples$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getCouples.type),
        concatMap(({ request }: { request: IGetCouplesRequest }) => this.couplesService.getAllCouples(request).pipe(
            map((couples: ICouplesResponse) => actions.getCouplesSuccess({ couples: couples })),
            catchError((error: any) => of(actions.getCouplesError({ error }))),
        ))
    ));

    // fetch couple
    getCouple$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getCouple.type),
        concatMap(({ coupleId }: { coupleId: number }) => this.couplesService.getCouple(coupleId).pipe(
            map((couple: ICouple) => actions.getCoupleSuccess({ coupleDetail: couple })),
            catchError((error: any) => of(actions.getCoupleError({ error }))),
        ))
    ));

    // create couple
    createCouples$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createCouple.type),
        concatMap(({ request }: { request: ICreateCoupleRequest }) => this.couplesService.createCouple(request).pipe(
            map((response: ICouple) => actions.createCoupleSuccess({ response })),
            catchError((error: any) => of(actions.createCoupleError({ error }))),
        ))
    ));

    // update couple
    updateCouples$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateCouple.type),
        concatMap(({ request }: { request: IUpdateCoupleRequest }) => this.couplesService.updateCouple(request).pipe(
            map(() => actions.updateCoupleSuccess()),
            catchError((error: any) => of(actions.updateCoupleError({ error }))),
        ))
    ));
}
