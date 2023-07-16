import { ICouple } from 'src/app/types/couple.types';
import { ICoupleState } from './couple.interfaces';

export const initialState: ICoupleState = {
    couples: null,
    coupleDetail: null,
    birdEggDetail: null,
    loadingAll: false,
    loadingDetail: false,
    loadingModal: false,
    pagination: null,
    errors: null
};

