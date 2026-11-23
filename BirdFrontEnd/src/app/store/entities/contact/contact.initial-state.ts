import { IContactState } from "./contact.interfaces";

export const initialState: IContactState = {
    contacts: null,
    contactDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};
