import { createAction, props } from "@ngrx/store";
import { IGetOwnersRequest, IOwnersResponse } from "src/app/types/owner.types";

// GET all Owners
export const getOwners = createAction('[Owner] GET All Owners', props<{ request: IGetOwnersRequest }>());
export const getOwnersSuccess = createAction('[Owner] GET All Owners Success', props<{ owners: IOwnersResponse }>());
export const getOwnersError = createAction('[Owner] GET All Owners Error', props<{ error: any }>());
