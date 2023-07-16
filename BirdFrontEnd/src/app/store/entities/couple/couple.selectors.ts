import { createSelector } from '@ngrx/store';
import { IFeatureState, selectFeature } from '../store.config';
import { ICoupleState } from './couple.interfaces';

export const selectCoupleState = createSelector(
    selectFeature,
    (state: IFeatureState) => state.couple
);

export const selectLoadingAll = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.loadingAll,
);

export const selectLoadingDetail = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.loadingDetail,
);

export const selectLoadingModal = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.loadingModal,
);

export const selectPagination = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.pagination,
);

export const selectCouples = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.couples
);

export const selectCouple = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.coupleDetail
);

export const selectCoupleBirdEgg = createSelector(
    selectCoupleState,
    (state: ICoupleState) => state.birdEggDetail
);
