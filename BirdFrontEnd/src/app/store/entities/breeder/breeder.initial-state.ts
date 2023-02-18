import { IBreeder } from 'src/app/types/breeder.types';
import { IBreederState } from './breeder.interfaces';

export const initialState: IBreederState = {
    breeders: {} as IBreeder[],
    loadingAll: false,
    loadingDetail: false,
    errors: null
};

