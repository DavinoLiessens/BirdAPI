import { IBird } from "./bird.types";
import { IBirdEgg } from "./birdEgg.types";
import { PagedResponse } from "./paged-response.types";
import { IPaginationRequest, ISearchRequest } from "./pagination.types";

export interface ICouple {
    id: number;
    name: string;
    startedAt: Date;
    father: IBird;
    mother: IBird;
    cageNumber: number;
    description: string;
    eggs: IBirdEgg[];
}

export interface ICreateCoupleRequest {
    name: string;
    fatherId: number;
    motherId: number;
    startedAt: Date;
    cageNumber: number;
    description: string;
}

export interface IUpdateCoupleRequest {
    id: number;
    eggs: IBirdEgg[];
    description: string;
}

export interface IGetCouplesRequest extends IPaginationRequest, ISearchRequest {}
export type ICouplesResponse = PagedResponse<ICouple>;
