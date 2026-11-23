import { IContactState } from "./contact.interfaces";
import * as actions from './contact.actions';
import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./contact.initial-state";

const reducer = createReducer(
    initialState,

    // GET Contacts
    on(actions.getContacts, (state) => {
        return {
            ...state,
            loadingAll: true,
        };
    }),
    on(actions.getContactsSuccess, (state, { contacts }) => {
        return {
            ...state,
            contacts: contacts.results,
            pagination: contacts.pagination,
            loadingAll: false,
            errors: null
        };
    }),
    on(actions.getContactsError, (state, { error }) => {
        return {
            ...state,
            loadingAll: false,
            errors: error
        };
    }),

    // GET Contact
    on(actions.getContact, (state) => {
        return {
            ...state,
            loadingDetail: true,
        };
    }),
    on(actions.getContactSuccess, (state, { contactDetail }) => {
        return {
            ...state,
            contactDetail: contactDetail,
            loadingDetail: false,
            errors: null
        };
    }),
    on(actions.getContactError, (state, { error }) => {
        return {
            ...state,
            loadingDetail: false,
            errors: error
        };
    }),

    // UPDATE Contact
    on(actions.updateContact, (state) => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(actions.updateContactSuccess, (state) => {
        return {
            ...state,
            loading: false,
            errors: null
        };
    }),
    on(actions.updateContactError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            errors: error
        };
    }),

    // Clear detail
    on(actions.clearContactDetail, (state) => {
        return {
            ...state,
            contactDetail: null
        }
    }),
);

export function contactReducer(state: IContactState | undefined, action: Action) {
    return reducer(state, action);
}