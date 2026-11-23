import { createAction, props } from "@ngrx/store";
import { ICreateContactRequest, IGetContactsRequest, IContact, IContactsResponse, IUpdateContactRequest } from "src/app/types/contact.types";

// GET all Contacts
export const getContacts = createAction('[Contact] GET All Contacts', props<{ request: IGetContactsRequest }>());
export const getContactsSuccess = createAction('[Contact] GET All Contacts Success', props<{ contacts: IContactsResponse }>());
export const getContactsError = createAction('[Contact] GET All Contacts Error', props<{ error: any }>());

// GET contact
export const getContact = createAction('[Contact] GET Contact', props<{ contactId: number }>());
export const getContactSuccess = createAction('[Contact] GET Contact Success', props<{ contactDetail: IContact }>());
export const getContactError = createAction('[Contact] GET Contact Error', props<{ error: any }>());

// CREATE contact
export const createContact = createAction('[Contact] CREATE Contact', props<{ request: ICreateContactRequest }>());
export const createContactSuccess = createAction('[Contact] CREATE Contact Success');
export const createContactError = createAction('[Contact] CREATE Contact Error', props<{ error: any }>());

// UPDATE contact
export const updateContact = createAction('[Contact] UPDATE Contact', props<{ request: IUpdateContactRequest }>());
export const updateContactSuccess = createAction('[Contact] UPDATE Contact Success');
export const updateContactError = createAction('[Contact] UPDATE Contact Error', props<{ error: any }>());

// Clear
export const clearContactDetail = createAction('[Contact] Clear Contact detail');
