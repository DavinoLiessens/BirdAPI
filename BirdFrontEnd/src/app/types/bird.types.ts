import { IBreeder } from "./breeder.types";
import { ICouple } from "./couple.types";
import { IOwner } from "./owner.types";
import { PagedResponse } from "./paged-response.types";
import { IFilterRequest, IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface IBird {
    id: number;
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: Date;
    color: string;
    cageNumber: string;
    breeder: IBreeder;
    breederId: number;
    owner: IOwner;
    ownerId: number;
    isDead: boolean;
}

export interface IBirdDetail {
    id: number;
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: Date;
    color: string;
    cageNumber: string;
    breeder: IBreeder;
    breederId: number;
    owner: IOwner;
    ownerId: number;
    description: string;
    isDead: boolean;
    birdCouples?: IBirdCouple[];
    birdShows?: IBirdShow[];
    parents: IBirdParents;
}

export interface ICreateBirdRequest {
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: number;
    color: string;
    cageNumber: string;
    breederId: number;
    ownerId: number;
    description: string;
    isDead: boolean;
}

export interface IUpdateBirdRequest {
    id: number;
    ringNumber: string;
    cageNumber: string;
    ownerId: string;
    description: string;
    isDead: boolean;
}

export interface IBirdCouple {
    id: number;
    name: string;
    fatherRingNumber: string;
    motherRingNumber: string;
    startedAt: Date;
}

export interface IBirdShow {
    id: number;
    birdId: number;
    location: string;
    rank: number;
    points: number;
}

export interface ICreateBirdShowRequest {
    birdId: number;
    location: string;
    rank: number;
    points: number;
}

export interface IUpdateBirdShowRequest {
    birdId: number;
    location: string;
    rank: number;
    points: number;
}

export interface IBirdParents {
    fatherId: number;
    motherId: number;
    fatherRingNumber: string;
    motherRingNumber: string;
    coupleId: number;
}

export interface IBirdShowRequest {
    birdId: number;
    id: number;
}

export interface IGetBirdsRequest extends IPaginationRequest, ISearchRequest, IFilterRequest {}
export type IBirdsResponse = PagedResponse<IBird>;
