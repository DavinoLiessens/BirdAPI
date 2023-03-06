import { createSelector } from '@ngrx/store';
import { IFeatureState, selectFeature } from '../store.config';
import { IBreederState } from './breeder.interfaces';

export const selectBreederState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.breeder
);

export const selectLoadingAll = createSelector(
    selectBreederState,
    (state: IBreederState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectBreederState,
    (state: IBreederState) => state.loadingDetail,
);

export const selectPagination = createSelector(
    selectBreederState,
    (state: IBreederState) => state.pagination,
);

export const selectBreeders = createSelector(
    selectBreederState,
    (state: IBreederState) => state.breeders
);

export const selectBreeder = createSelector(
    selectBreederState,
    (state: IBreederState) => state.breederDetail
);
