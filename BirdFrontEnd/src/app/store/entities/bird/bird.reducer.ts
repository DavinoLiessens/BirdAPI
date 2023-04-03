import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as actions from './bird.actions';
import { initialState } from './bird.initial-state';
import { IBirdState } from './bird.interfaces';

const reducer = createReducer(
    initialState,

    // GET Birds
    on(actions.getBirds, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getBirdsSuccess, (state, { birds }) => {
        return {
            ...state,
            birds: birds.results,
            pagination: birds.pagination,
            loadingAll: false,
            errors: null
        };
    }),
    on(actions.getBirdsError, (state, { error }) => {
        return {
            ...state,
            loadingAll: false,
            errors: error
        };
    }),

    // GET Bird
    on(actions.getBird, (state) => {
        return {
            ...state,
            loadingDetail: true,
        };
    }),
    on(actions.getBirdSuccess, (state, { birdDetail }) => {
        return {
            ...state,
            birdDetail: birdDetail,
            loadingDetail: false,
            errors: null
        };
    }),
    on(actions.getBirdError, (state, { error }) => {
        return {
            ...state,
            loadingDetail: false,
            errors: error
        };
    }),

    // UPDATE Bird
    on(actions.updateBird, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(actions.updateBirdSuccess, (state) => {
        return {
            ...state,
            loading: false,
            errors: null
        };
    }),
    on(actions.updateBirdError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            errors: error
        };
    }),
);

export function birdReducer(state: IBirdState | undefined, action: Action) {
    return reducer(state, action);
}
