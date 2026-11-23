import { IBird } from "./bird.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface IContact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    email?: string;
    /** The contact that represents the kwekerij (the logged-in user) itself. */
    isSelf: boolean;
}

export interface ICreateContactRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IUpdateContactRequest {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IGetContactsRequest extends IPaginationRequest, ISearchRequest {}
export type IContactsResponse = PagedResponse<IContact>;