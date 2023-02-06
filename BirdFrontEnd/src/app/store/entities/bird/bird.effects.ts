import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as actions from './bird.actions';

@Injectable()
export class BirdEffects {
    constructor(
        private actions$: Actions,
        // TODO implement BirdService
        ) { }

    // fetch companies
    // getBirds$ = createEffect(() => this.actions$.pipe(
    //     ofType(actions.getBirds.type),
    //     switchMap(({ request }: { request: any }) => of(request)),
    //     concatMap((request) => this.companyManagementService.getCompanies(request).pipe(
    //         map((companies: ICompanyManagement) => actions.getCompaniesSuccess({ payload: companies })),
    //         catchError((error) => of(actions.getCompaniesError({ error }))),
    //     ))
    // ));
}
