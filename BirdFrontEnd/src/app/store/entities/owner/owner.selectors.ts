import { createSelector } from "@ngrx/store";
import { IFeatureState, selectFeature } from "../store.config";
import { IOwnerState } from "./owner.interfaces";

export const selectOwnerState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.owner
);

export const selectLoadingAll = createSelector(
    selectOwnerState,
    (state: IOwnerState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectOwnerState,
    (state: IOwnerState) => state.loadingDetail,
);

export const selectPagination = createSelector(
    selectOwnerState,
    (state: IOwnerState) => state.pagination,
);

export const selectOwners = createSelector(
    selectOwnerState,
    (state: IOwnerState) => state.owners
);

export const selectOwner = createSelector(
    selectOwnerState,
    (state: IOwnerState) => state.ownerDetail
);
