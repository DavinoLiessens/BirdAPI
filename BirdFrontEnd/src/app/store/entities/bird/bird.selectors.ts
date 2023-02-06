import { createSelector } from '@ngrx/store';
import { IFeatureState, selectFeature } from '../store.config';
import { IBirdState } from './bird.interfaces';

export const selectFullProductState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.productmanagement
);

export const selectLoadingAll = createSelector(
    selectFullProductState,
    (state: IBirdState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectFullProductState,
    (state: IBirdState) => state.loadingDetail,
);

export const selectBirds = createSelector(
    selectFullProductState,
    (state: IBirdState) => state.birds
);
