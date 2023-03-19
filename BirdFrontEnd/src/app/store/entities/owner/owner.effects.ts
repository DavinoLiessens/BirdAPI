import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map } from "rxjs/operators";
import { OwnerService } from "src/app/Services/owner.service";
import { IGetOwnersRequest, IOwnersResponse } from "src/app/types/owner.types";
import * as actions from './owner.actions';

@Injectable()
export class OwnerEffects {
    constructor(
        private actions$: Actions,
        private ownerService: OwnerService
    ) { }

    // fetch breeders
    getOwners$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getOwners.type),
        concatMap(({ request }: { request: IGetOwnersRequest }) => this.ownerService.getAllOwners(request).pipe(
            map((owners: IOwnersResponse) => actions.getOwnersSuccess({ owners: owners })),
            catchError((error: any) => of(actions.getOwnersError({ error }))),
        ))
    ));
}
