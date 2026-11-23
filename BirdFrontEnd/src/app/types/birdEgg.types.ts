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
    layedOn: string | null;
    coupleId: number;
    cameOutOn?: string | null;
    flyOutOn?: string | null;
    ringNumber?: string;
    color?: string;
    gender?: string;
}

export interface IUpdateBirdEggRequest {
    id?: number; // not changeable
    layedOn: string | null; // not changeable
    coupleId: number; // not changeable
    cameOutOn?: string | null;
    flyOutOn?: string | null;
    ringNumber?: string;
    color?: string;
    gender?: string;
}
