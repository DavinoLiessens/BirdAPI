import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './breeder.actions';
import { initialState } from './breeder.initial-state';
import { IBreederState } from './breeder.interfaces';

const reducer = createReducer(
    initialState,

    // GET Breeders
    on(actions.getBreeders, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getBreedersSuccess, (state, { breeders }) => {
        return {
            ...state,
            breeders: breeders.results,
            pagination: breeders.pagination,
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
    }),

    // GET Breeder
    on(actions.getBreeder, (state) => {
        return {
            ...state,
            loadingDetail: true,
        };
    }),
    on(actions.getBreederSuccess, (state, { breederDetail }) => {
        return {
            ...state,
            breederDetail: breederDetail,
            loadingDetail: false,
            errors: null
        };
    }),
    on(actions.getBreederError, (state, { error }) => {
        return {
            ...state,
            loadingDetail: false,
            errors: error
        };
    }),

    // UPDATE Breeder
    on(actions.updateBreeder, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(actions.updateBreederSuccess, (state) => {
        return {
            ...state,
            loading: false,
            errors: null
        };
    }),
    on(actions.updateBreederError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            errors: error
        };
    }),

    // Clear detail
    on(actions.clearBreederDetail, (state) => {
        return {
            ...state,
            breederDetail: null
        }
    }),
);

export function breederReducer(state: IBreederState | undefined, action: Action) {
    return reducer(state, action);
}
