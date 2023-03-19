import { IBird } from "./bird.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface IOwner {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface ICreateOwnerRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IUpdateOwnerRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IGetOwnersRequest extends IPaginationRequest, ISearchRequest {}
export type IOwnersResponse = PagedResponse<IOwner>;