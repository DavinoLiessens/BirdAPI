import { IBreeder } from 'src/app/types/breeder.types';
import { IBreederState } from './breeder.interfaces';

export const initialState: IBreederState = {
    breeders: null,
    breederDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};

