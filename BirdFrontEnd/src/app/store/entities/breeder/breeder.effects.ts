import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BreederService } from 'src/app/Services/breeder.service';
import { IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest } from 'src/app/types/breeder.types';
import * as actions from './breeder.actions';

@Injectable()
export class BreederEffects {
    constructor(
        private actions$: Actions,
        private breedersService: BreederService
        ) { }

    // fetch companies
    getBreeders$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBreeders.type),
        concatMap(({ request }: { request: IGetBreedersRequest }) => this.breedersService.getAllBreeders(request).pipe(
            map((breeders: IBreedersResponse) => actions.getBreedersSuccess({ breeders: breeders })),
            catchError((error: any) => of(actions.getBreedersError({ error }))),
        ))
    ));

    // create breeder
    createBreeders$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createBreeder.type),
        concatMap(({ request }: { request: ICreateBreederRequest }) => this.breedersService.createBreeder(request).pipe(
            map(() => actions.createBreederSuccess()),
            catchError((error: any) => of(actions.createBreederError({ error }))),
        ))
    ));
}
