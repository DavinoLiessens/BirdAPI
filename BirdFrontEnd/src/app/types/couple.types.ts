import { IBird } from "./bird.types";
import { IBirdEgg } from "./birdEgg.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface ICouple {
    id: number;
    name: string;
    startedAt: Date;
    fatherRingNumber: string;
    motherRingNumber: string;
    cageNumber: string;
    description?: string;
    birdEggs?: IBirdEgg[];
}

export interface ICreateCoupleRequest {
    name: string;
    fatherId: number;
    motherId: number;
    startedAt: Date;
    cageNumber: string;
    description?: string;
}

export interface IUpdateCoupleRequest {
    coupleId: number;
    description?: string;
}

export interface ICreatedCoupleResponseModel {
    id: number;
    name: string;
    startedAt: Date;
    fatherRingNumber: string;
    motherRingNumber: string;
    cageNumber: string;
    description?: string;
}

export interface IGetCouplesRequest extends IPaginationRequest, ISearchRequest {}
export type ICouplesResponse = PagedResponse<ICouple>;
