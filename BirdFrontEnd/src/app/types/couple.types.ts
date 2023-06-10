import { IBird } from "./bird.types";
import { IBirdEgg } from "./birdEgg.types";

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
    father: IBird;
    mother: IBird;
    description: string;
    eggs: IBirdEgg[];
}

export interface IUpdateCoupleRequest {
    eggs: IBirdEgg[];
    description: string;
}