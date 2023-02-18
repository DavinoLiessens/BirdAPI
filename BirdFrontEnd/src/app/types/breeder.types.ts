import { IBird } from "./bird.types";

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