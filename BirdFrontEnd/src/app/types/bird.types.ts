import { IBreeder } from "./breeder.types";
import { IOwner } from "./owner.types";

export interface IBird {
    id: number;
    ringNumber: string;
    gender: string;
    birdType: string;
    birthDate: number;
    color: string;
    cageNumber: number;
    breeder: IBreeder;
    breederId: number;
    owner: IOwner;
    ownerId: number;
    description: string;
    isDead: boolean;
    isChild: boolean;
    isFather: boolean;
    isMother: boolean;
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
    isChild: boolean;
}

export interface IUpdateBirdRequest {
    ringNumber: string;
    cageNumber: number;
    ownerId: number;
    description: string;
    isDead: boolean;
    isChild: boolean;
}