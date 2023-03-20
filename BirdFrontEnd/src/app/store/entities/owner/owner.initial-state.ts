import { IOwnerState } from "./owner.interfaces";

export const initialState: IOwnerState = {
    owners: null,
    ownerDetail: null,
    loadingAll: false,
    loadingDetail: false,
    pagination: null,
    errors: null
};
