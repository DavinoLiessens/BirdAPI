import { IBirdState } from './bird.interfaces';

export const initialState: IBirdState = {
    birds: null,
    birdDetail: null,
    pagination: null,
    isFormValid: true,
    loadingAll: false,
    loadingDetail: false,
    errors: null
};

