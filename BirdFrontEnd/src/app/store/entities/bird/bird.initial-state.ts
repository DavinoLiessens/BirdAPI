import { IBirdState } from './bird.interfaces';

export const initialState: IBirdState = {
    birds: {} as any,
    isFormValid: true,
    loadingAll: false,
    loadingDetail: false,
    errors: null
};

