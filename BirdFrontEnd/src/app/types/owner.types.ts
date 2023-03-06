import { IBird } from "./bird.types";

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