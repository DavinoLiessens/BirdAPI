import { createSelector } from '@ngrx/store';
import { IFeatureState, selectFeature } from '../store.config';
import { IBirdState } from './bird.interfaces';

export const selectBirdState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.bird
);

export const selectLoadingAll = createSelector(
    selectBirdState,
    (state: IBirdState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectBirdState,
    (state: IBirdState) => state.loadingDetail,
);

export const selectLoadingModal = createSelector(
    selectBirdState,
    (state: IBirdState) => state.loadingModal,
);

export const selectPagination = createSelector(
    selectBirdState,
    (state: IBirdState) => state.pagination,
);

export const selectBirds = createSelector(
    selectBirdState,
    (state: IBirdState) => state.birds
);

export const selectBird = createSelector(
    selectBirdState,
    (state: IBirdState) => state.birdDetail
);

export const selectBirdShow = createSelector(
    selectBirdState,
    (state: IBirdState) => state.birdShowDetail
);
