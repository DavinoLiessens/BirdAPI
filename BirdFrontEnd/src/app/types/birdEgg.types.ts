export interface IBirdEgg {
    id?: number;
    layedOn: Date; // eitje gelegt op
    cameOutOn?: Date; // eitje uitgekomen op
    ringNumber?: string; // ringnummer
    flyOutOn?: Date; // Vogeltje uitgevlogen op
    coupleId: number;
    color?: string;
    gender?: string;
    birdId?: number;
}

export interface IBirdEggRequest {
    coupleId: number;
    birdEggId: number;
}

export interface ICreateBirdEggRequest {
    id?: number; // pass null in object
    layedOn: Date;
    coupleId: number;
    cameOutOn?: Date;
    flyOutOn?: Date;
    ringNumber?: string;
    color?: string;
    gender?: string;
}

export interface IUpdateBirdEggRequest {
    id?: number; // not changeable
    layedOn: Date; // not changeable
    coupleId: number; // not changeable
    cameOutOn?: Date;
    flyOutOn?: Date;
    ringNumber?: string;
    color?: string;
    gender?: string;
}
