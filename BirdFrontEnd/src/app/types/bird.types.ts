import { IBreeder } from "./breeder.types";
import { ICouple } from "./couple.types";
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
    birdCouples?: BirdCouple[];
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

export interface BirdCouple {
    id: number;
    name: string;
    fatherRingNumber: string;
    motherRingNumber: string;
    startedAt: Date;
}

export interface IGetBirdsRequest extends IPaginationRequest, ISearchRequest {}
export type IBirdsResponse = PagedResponse<IBird>;
