import { createAction, props } from "@ngrx/store";
import { ICreateOwnerRequest, IGetOwnersRequest, IOwner, IOwnersResponse, IUpdateOwnerRequest } from "src/app/types/owner.types";

// GET all Owners
export const getOwners = createAction('[Owner] GET All Owners', props<{ request: IGetOwnersRequest }>());
export const getOwnersSuccess = createAction('[Owner] GET All Owners Success', props<{ owners: IOwnersResponse }>());
export const getOwnersError = createAction('[Owner] GET All Owners Error', props<{ error: any }>());

// GET owner
export const getOwner = createAction('[Owner] GET Owner', props<{ ownerId: number }>());
export const getOwnerSuccess = createAction('[Owner] GET Owner Success', props<{ ownerDetail: IOwner }>());
export const getOwnerError = createAction('[Owner] GET Owner Error', props<{ error: any }>());

// CREATE owner
export const createOwner = createAction('[Owner] CREATE Owner', props<{ request: ICreateOwnerRequest }>());
export const createOwnerSuccess = createAction('[Owner] CREATE Owner Success');
export const createOwnerError = createAction('[Owner] CREATE Owner Error', props<{ error: any }>());

// UPDATE owner
export const updateOwner = createAction('[Owner] UPDATE Owner', props<{ request: IUpdateOwnerRequest }>());
export const updateOwnerSuccess = createAction('[Owner] UPDATE Owner Success');
export const updateOwnerError = createAction('[Owner] UPDATE Owner Error', props<{ error: any }>());
