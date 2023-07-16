import { IBreeder } from "./breeder.types";
import { IOwner } from "./owner.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface IBird {
    id: number;
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: Date;
    color: string;
    cageNumber: number;
    breeder: IBreeder;
    breederId: number;
    owner: IOwner;
    ownerId: number;
    description: string;
    isDead: boolean;
}

export interface ICreateBirdRequest {
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: number;
    color: string;
    cageNumber: number;
    breederId: number;
    ownerId: number;
    description: string;
    isDead: boolean;
}

export interface IUpdateBirdRequest {
    id: number;
    ringNumber: string;
    cageNumber: number;
    ownerId: string;
    description: string;
    isDead: boolean;
}

export interface IGetBirdsRequest extends IPaginationRequest, ISearchRequest {}
export type IBirdsResponse = PagedResponse<IBird>;
