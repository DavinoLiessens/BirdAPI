import { createAction, props } from '@ngrx/store';
import { IBreedersResponse, IGetBreedersRequest } from 'src/app/types/breeder.types';

// GET all Breeders
export const getBreeders = createAction('[Breeder] GET All Breeders', props<{ request: IGetBreedersRequest }>());
export const getBreedersSuccess = createAction('[Breeder] GET All Breeders Success', props<{ breeders: IBreedersResponse }>());
export const getBreedersError = createAction('[Breeder] GET All Breeders Error', props<{ error: any }>());