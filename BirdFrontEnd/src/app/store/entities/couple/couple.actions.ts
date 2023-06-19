import { createAction, props } from '@ngrx/store';
import { ICouple, ICouplesResponse, ICreateCoupleRequest, IGetCouplesRequest, IUpdateCoupleRequest } from 'src/app/types/couple.types';

// GET all Couples
export const getCouples = createAction('[Couple] GET All Couples', props<{ request: IGetCouplesRequest }>());
export const getCouplesSuccess = createAction('[Couple] GET All Couples Success', props<{ couples: ICouplesResponse }>());
export const getCouplesError = createAction('[Couple] GET All Couples Error', props<{ error: any }>());

// GET couple
export const getCouple = createAction('[Couple] GET Couple', props<{ coupleId: number }>());
export const getCoupleSuccess = createAction('[Couple] GET Couple Success', props<{ coupleDetail: ICouple }>());
export const getCoupleError = createAction('[Couple] GET Couple Error', props<{ error: any }>());

// CREATE couple
export const createCouple = createAction('[Couple] CREATE Couple', props<{ request: ICreateCoupleRequest }>());
export const createCoupleSuccess = createAction('[Couple] CREATE Couple Success', props<{ response: ICouple }>());
export const createCoupleError = createAction('[Couple] CREATE Couple Error', props<{ error: any }>());

// UPDATE couple
export const updateCouple = createAction('[Couple] UPDATE Couple', props<{ request: IUpdateCoupleRequest }>());
export const updateCoupleSuccess = createAction('[Couple] UPDATE Couple Success');
export const updateCoupleError = createAction('[Couple] UPDATE Couple Error', props<{ error: any }>());

// Clear
export const clearCoupleDetail = createAction('[Couple] Clear Couple detail');
