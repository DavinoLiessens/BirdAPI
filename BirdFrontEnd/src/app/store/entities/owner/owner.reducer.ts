import { IOwnerState } from "./owner.interfaces";
import * as actions from './owner.actions';
import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./owner.initial-state";

const reducer = createReducer(
    initialState,

    // GET Breeders
    on(actions.getOwners, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getOwnersSuccess, (state, { owners }) => {
        return {
            ...state,
            owners: owners.results,
            pagination: owners.pagination,
            loadingAll: false,
            errors: null
        };
    }),
    on(actions.getOwnersError, (state, { error }) => {
        return {
            ...state,
            loadingAll: false,
            errors: error
        };
    })
);

export function ownerReducer(state: IOwnerState | undefined, action: Action) {
    return reducer(state, action);
}