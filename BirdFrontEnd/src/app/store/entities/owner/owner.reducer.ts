import { IOwnerState } from "./owner.interfaces";
import * as actions from './owner.actions';
import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./owner.initial-state";

const reducer = createReducer(
    initialState,

    // GET Owners
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
    }),

    // GET Owner
    on(actions.getOwner, (state) => {
        return {
            ...state,
            loadingDetail: true,
        };
    }),
    on(actions.getOwnerSuccess, (state, { ownerDetail }) => {
        return {
            ...state,
            ownerDetail: ownerDetail,
            loadingDetail: false,
            errors: null
        };
    }),
    on(actions.getOwnerError, (state, { error }) => {
        return {
            ...state,
            loadingDetail: false,
            errors: error
        };
    }),

    // UPDATE Owner
    on(actions.updateOwner, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(actions.updateOwnerSuccess, (state) => {
        return {
            ...state,
            loading: false,
            errors: null
        };
    }),
    on(actions.updateOwnerError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            errors: error
        };
    }),
);

export function ownerReducer(state: IOwnerState | undefined, action: Action) {
    return reducer(state, action);
}