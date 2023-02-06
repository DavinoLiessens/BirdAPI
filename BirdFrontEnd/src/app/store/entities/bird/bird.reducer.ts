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
            birds: birds,
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
    }),);

export function birdReducer(state: IBirdState | undefined, action: Action) {
    return reducer(state, action);
}
