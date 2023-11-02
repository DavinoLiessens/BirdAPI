import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { BirdService } from 'src/app/Services/bird.service';
import { IBird, IBirdDetail, IBirdsResponse, ICreateBirdRequest, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';
import * as actions from './bird.actions';

@Injectable()
export class BirdEffects {
    constructor(
        private actions$: Actions,
        private birdService: BirdService
        ) { }

    // fetch birds
    getBirds$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBirds.type),
        concatMap(({ request }: { request: IGetBirdsRequest }) => this.birdService.getBirds(request).pipe(
            map((birds: IBirdsResponse) => actions.getBirdsSuccess({ birds: birds })),
            catchError((error: any) => of(actions.getBirdsError({ error }))),
        ))
    ));

    // fetch bird
    getBird$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getBird.type),
        concatMap(({ birdId }: { birdId: number }) => this.birdService.getBird(birdId).pipe(
            map((bird: IBirdDetail) => actions.getBirdSuccess({ birdDetail: bird })),
            catchError((error: any) => of(actions.getBirdError({ error }))),
        ))
    ));

    // create breeder
    createBirds$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createBird.type),
        concatMap(({ request }: { request: ICreateBirdRequest }) => this.birdService.createBird(request).pipe(
            map(() => actions.createBirdSuccess()),
            catchError((error: any) => of(actions.createBirdError({ error }))),
        ))
    ));

    // update breeder
    updateBirds$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateBird.type),
        concatMap(({ request }: { request: IUpdateBirdRequest }) => this.birdService.updateBird(request).pipe(
            map(() => actions.updateBirdSuccess()),
            catchError((error: any) => of(actions.updateBirdError({ error }))),
        ))
    ));
}
