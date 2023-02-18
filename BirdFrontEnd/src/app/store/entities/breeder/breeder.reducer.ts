import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as actions from './breeder.actions';
import { initialState } from './breeder.initial-state';
import { IBreederState } from './breeder.interfaces';

const reducer = createReducer(
    initialState,

    // GET Birds
    on(actions.getBreeders, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getBreedersSuccess, (state, { breeders }) => {
        return {
            ...state,
            breeders: breeders,
            loadingAll: false,
            errors: null
        };
    }),
    on(actions.getBreedersError, (state, { error }) => {
        return {
            ...state,
            loadingAll: false,
            errors: error
        };
    }),);

export function breederReducer(state: IBreederState | undefined, action: Action) {
    return reducer(state, action);
}
