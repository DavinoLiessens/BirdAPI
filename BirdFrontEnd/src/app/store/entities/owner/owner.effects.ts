import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { OwnerService } from "src/app/Services/owner.service";
import { ICreateOwnerRequest, IGetOwnersRequest, IOwner, IOwnersResponse, IUpdateOwnerRequest } from "src/app/types/owner.types";
import * as actions from './owner.actions';

@Injectable()
export class OwnerEffects {
    constructor(
        private actions$: Actions,
        private ownerService: OwnerService
    ) { }

    // fetch owners
    getOwners$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getOwners.type),
        concatMap(({ request }: { request: IGetOwnersRequest }) => this.ownerService.getAllOwners(request).pipe(
            map((owners: IOwnersResponse) => actions.getOwnersSuccess({ owners: owners })),
            catchError((error: any) => of(actions.getOwnersError({ error }))),
        ))
    ));

    // fetch owner
    getOwner$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getOwner.type),
        concatMap(({ ownerId }: { ownerId: number }) => this.ownerService.getOwner(ownerId).pipe(
            map((owner: IOwner) => actions.getOwnerSuccess({ ownerDetail: owner })),
            catchError((error: any) => of(actions.getOwnerError({ error }))),
        ))
    ));

    // create owner
    createOwners$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createOwner.type),
        concatMap(({ request }: { request: ICreateOwnerRequest }) => this.ownerService.createOwner(request).pipe(
            map(() => actions.createOwnerSuccess()),
            catchError((error: any) => of(actions.createOwnerError({ error }))),
        ))
    ));

    // update owner
    updateOwners$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateOwner.type),
        concatMap(({ request }: { request: IUpdateOwnerRequest }) => this.ownerService.updateOwner(request).pipe(
            map(() => actions.updateOwnerSuccess()),
            catchError((error: any) => of(actions.updateOwnerError({ error }))),
        ))
    ));
}
