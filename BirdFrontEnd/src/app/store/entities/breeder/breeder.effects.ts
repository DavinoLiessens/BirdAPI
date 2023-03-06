import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BreederService } from 'src/app/Services/breeder.service';
import { IBreeder, IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest, IUpdateBreederRequest } from 'src/app/types/breeder.types';
import * as actions from './breeder.actions';

@Injectable()
export class BreederEffects {
    constructor(
        private actions$: Actions,
        private breedersService: BreederService
    ) { }

    // fetch breeders
    getBreeders$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBreeders.type),
        concatMap(({ request }: { request: IGetBreedersRequest }) => this.breedersService.getAllBreeders(request).pipe(
            map((breeders: IBreedersResponse) => actions.getBreedersSuccess({ breeders: breeders })),
            catchError((error: any) => of(actions.getBreedersError({ error }))),
        ))
    ));

    // fetch breeder
    getBreeder$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBreeder.type),
        concatMap(({ breederId }: { breederId: number }) => this.breedersService.getBreeder(breederId).pipe(
            map((breeder: IBreeder) => actions.getBreederSuccess({ breederDetail: breeder })),
            catchError((error: any) => of(actions.getBreederError({ error }))),
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

    // update breeder
    updateBreeders$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateBreeder.type),
        concatMap(({ request }: { request: IUpdateBreederRequest }) => this.breedersService.updateBreeder(request).pipe(
            map(() => actions.updateBreederSuccess()),
            catchError((error: any) => of(actions.updateBreederError({ error }))),
        ))
    ));
}
