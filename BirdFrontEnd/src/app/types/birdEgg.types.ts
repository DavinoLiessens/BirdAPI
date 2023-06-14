export interface IBirdEgg {
    layedOn: Date; // eitje gelegt op
    cameOutOn: Date; // eitje uitgekomen op
    ringNumber: string; // ringnummer
    flyOutOn: string; // Vogeltje uitgevlogen op
    coupleId: number;
}

export interface ICreateBirdEggRequest {
    layedOn: Date;
    coupleId: number;
    cameOutOn?: Date;
    flyOutOn?: Date;
    ringNumber?: string;
}

export interface IUpdateBirdEggRequest {
    cameOutOn?: Date;
    flyOutOn?: Date;
    ringNumber?: string;
}
