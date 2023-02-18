import { IBird } from "./bird.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface IBreeder {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    birds: IBird[];
}

export interface ICreateBreederRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IUpdateBreederRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface IGetBreedersRequest extends IPaginationRequest, ISearchRequest {}
export type IBreedersResponse = PagedResponse<IBreeder>;