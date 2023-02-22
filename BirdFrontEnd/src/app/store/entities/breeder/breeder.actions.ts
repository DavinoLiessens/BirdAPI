import { createAction, props } from '@ngrx/store';
import { IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest } from 'src/app/types/breeder.types';

// GET all Breeders
export const getBreeders = createAction('[Breeder] GET All Breeders', props<{ request: IGetBreedersRequest }>());
export const getBreedersSuccess = createAction('[Breeder] GET All Breeders Success', props<{ breeders: IBreedersResponse }>());
export const getBreedersError = createAction('[Breeder] GET All Breeders Error', props<{ error: any }>());

// CREATE breeder
export const createBreeder = createAction('[Breeder] CREATE Breeder', props<{ request: ICreateBreederRequest }>());
export const createBreederSuccess = createAction('[Breeder] CREATE Breeder Success');
export const createBreederError = createAction('[Breeder] CREATE Breeder Error', props<{ error: any }>());
