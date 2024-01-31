import { IBirdState } from './bird.interfaces';

export const initialState: IBirdState = {
    birds: null,
    birdDetail: null,
    birdShowDetail: null,
    pagination: null,
    isFormValid: true,
    loadingAll: false,
    loadingDetail: false,
    loadingModal: false,
    errors: null
};

