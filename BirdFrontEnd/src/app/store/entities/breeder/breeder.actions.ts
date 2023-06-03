import { createAction, props } from '@ngrx/store';
import { IBreeder, IBreedersResponse, ICreateBreederRequest, IGetBreedersRequest, IUpdateBreederRequest } from 'src/app/types/breeder.types';

// GET all Breeders
export const getBreeders = createAction('[Breeder] GET All Breeders', props<{ request: IGetBreedersRequest }>());
export const getBreedersSuccess = createAction('[Breeder] GET All Breeders Success', props<{ breeders: IBreedersResponse }>());
export const getBreedersError = createAction('[Breeder] GET All Breeders Error', props<{ error: any }>());

// GET breeder
export const getBreeder = createAction('[Breeder] GET Breeder', props<{ breederId: number }>());
export const getBreederSuccess = createAction('[Breeder] GET Breeder Success', props<{ breederDetail: IBreeder }>());
export const getBreederError = createAction('[Breeder] GET Breeder Error', props<{ error: any }>());

// CREATE breeder
export const createBreeder = createAction('[Breeder] CREATE Breeder', props<{ request: ICreateBreederRequest }>());
export const createBreederSuccess = createAction('[Breeder] CREATE Breeder Success');
export const createBreederError = createAction('[Breeder] CREATE Breeder Error', props<{ error: any }>());

// UPDATE breeder
export const updateBreeder = createAction('[Breeder] UPDATE Breeder', props<{ request: IUpdateBreederRequest }>());
export const updateBreederSuccess = createAction('[Breeder] UPDATE Breeder Success');
export const updateBreederError = createAction('[Breeder] UPDATE Breeder Error', props<{ error: any }>());

// Clear
export const clearBreederDetail = createAction('[Breeder] Clear Breeder detail');
