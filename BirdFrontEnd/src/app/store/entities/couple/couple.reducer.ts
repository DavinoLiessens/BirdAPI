import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './couple.actions';
import { initialState } from './couple.initial-state';
import { ICoupleState } from './couple.interfaces';

const reducer = createReducer(
    initialState,

    // GET Couples
    on(actions.getCouples, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getCouplesSuccess, (state, { couples }) => {
        return {
            ...state,
            couples: couples.results,
            pagination: couples.pagination,
            loadingAll: false,
            errors: null
        };
    }),
    on(actions.getCouplesError, (state, { error }) => {
        return {
            ...state,
            loadingAll: false,
            errors: error
        };
    }),

    // GET Couple
    on(actions.getCouple, (state) => {
        return {
            ...state,
            loadingDetail: true,
        };
    }),
    on(actions.getCoupleSuccess, (state, { coupleDetail }) => {
        return {
            ...state,
            coupleDetail: coupleDetail,
            loadingDetail: false,
            errors: null
        };
    }),
    on(actions.getCoupleError, (state, { error }) => {
        return {
            ...state,
            loadingDetail: false,
            errors: error
        };
    }),

    // UPDATE Couple
    on(actions.updateCouple, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(actions.updateCoupleSuccess, (state) => {
        return {
            ...state,
            loading: false,
            errors: null
        };
    }),
    on(actions.updateCoupleError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            errors: error
        };
    }),

    // create birdegg modal
    on(actions.createBirdEgg, (state) => {
        return {
            ...state,
            loadingModal: true
        };
    }),
    on(actions.createBirdEggSuccess, (state) => {
        return {
            ...state,
            loadingModal: false
        };
    }),
    on(actions.createBirdEggError, (state) => {
        return {
            ...state,
            loadingModal: false
        };
    }),

    // GET Couple BirdEgg
    on(actions.getBirdEgg, (state) => {
        return {
            ...state,
            loadingModal: true,
        };
    }),
    on(actions.getBirdEggSuccess, (state, { response }) => {
        return {
            ...state,
            loadingModal: false,
            birdEggDetail: response,
            errors: null
        };
    }),
    on(actions.getBirdEggError, (state, { error }) => {
        return {
            ...state,
            loadingModal: false,
            errors: error
        };
    }),

    // Clear detail
    on(actions.clearCoupleDetail, (state) => {
        return {
            ...state,
            coupleDetail: null
        }
    }),

    // Clear detail
    on(actions.clearBirdEggDetail, (state) => {
        return {
            ...state,
            birdEggDetail: null
        }
    }),
);

export function coupleReducer(state: ICoupleState | undefined, action: Action) {
    return reducer(state, action);
}
