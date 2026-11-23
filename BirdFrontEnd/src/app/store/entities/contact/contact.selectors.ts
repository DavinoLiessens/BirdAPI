import { createSelector } from "@ngrx/store";
import { IFeatureState, selectFeature } from "../store.config";
import { IContactState } from "./contact.interfaces";

export const selectContactState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.contact
);

export const selectLoadingAll = createSelector(
    selectContactState,
    (state: IContactState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectContactState,
    (state: IContactState) => state.loadingDetail,
);

export const selectPagination = createSelector(
    selectContactState,
    (state: IContactState) => state.pagination,
);

export const selectContacts = createSelector(
    selectContactState,
    (state: IContactState) => state.contacts
);

export const selectContact = createSelector(
    selectContactState,
    (state: IContactState) => state.contactDetail
);
