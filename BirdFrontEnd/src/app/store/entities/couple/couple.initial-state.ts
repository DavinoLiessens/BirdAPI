import { ICouple } from 'src/app/types/couple.types';
import { ICoupleState } from './couple.interfaces';

export const initialState: ICoupleState = {
    couples: null,
    coupleDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};

