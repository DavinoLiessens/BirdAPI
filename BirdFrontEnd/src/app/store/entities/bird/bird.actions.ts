import { createAction, props } from '@ngrx/store';
import { IBird, IBirdsResponse, ICreateBirdRequest, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';

// GET all birds
// TODO add request for search and pagination
export const getBirds = createAction('[Bird] GET All Birds', props<{ request: IGetBirdsRequest }>());
export const getBirdsSuccess = createAction('[Bird] GET All Birds Success', props<{ birds: IBirdsResponse }>());
export const getBirdsError = createAction('[Bird] GET All Birds Error', props<{ error: any }>());

// GET bird
export const getBird = createAction('[Bird] GET Bird', props<{ birdId: number }>());
export const getBirdSuccess = createAction('[Bird] GET Bird Success', props<{ birdDetail: IBird }>());
export const getBirdError = createAction('[Bird] GET Bird Error', props<{ error: any }>());

// CREATE bird
export const createBird = createAction('[Bird] CREATE Bird', props<{ request: ICreateBirdRequest }>());
export const createBirdSuccess = createAction('[Bird] CREATE Bird Success');
export const createBirdError = createAction('[Bird] CREATE Bird Error', props<{ error: any }>());

// UPDATE bird
export const updateBird = createAction('[Bird] UPDATE Bird', props<{ request: IUpdateBirdRequest }>());
export const updateBirdSuccess = createAction('[Bird] UPDATE Bird Success');
export const updateBirdError = createAction('[Bird] UPDATE Bird Error', props<{ error: any }>());


// Clear
export const clearBirdDetail = createAction('[Bird] Clear Bird detail');
