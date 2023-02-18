import { createAction, props } from '@ngrx/store';

// GET all birds
// TODO add request for search and pagination
export const getBirds = createAction('[Bird] GET All Birds');
export const getBirdsSuccess = createAction('[Bird] GET All Birds Success', props<{ birds: any }>());
export const getBirdsError = createAction('[Bird] GET All Birds Error', props<{ error: any }>());