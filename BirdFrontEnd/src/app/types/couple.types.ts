export interface ICouple {
    id: number;
    name: string;
    father: string;
    mother: string;
    child1: string;
    child2: string;
    child3: string;
    child4: string;
    child5: string;
    child6: string;
    description: string;
}

export interface ICreateCoupleRequest {
    name: string;
    father: string;
    mother: string;
    child1: string;
    child2: string;
    child3: string;
    child4: string;
    child5: string;
    child6: string;
    description: string;
}

export interface IUpdateCoupleRequest {
    name: string;
    father: string;
    mother: string;
    child1: string;
    child2: string;
    child3: string;
    child4: string;
    child5: string;
    child6: string;
    description: string;
}