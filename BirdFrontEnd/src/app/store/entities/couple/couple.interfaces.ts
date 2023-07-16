import { HttpErrorResponse } from '@angular/common/http';
import { IBirdEgg } from 'src/app/types/birdEgg.types';
import { ICouple } from 'src/app/types/couple.types';
import { IPagination } from 'src/app/types/pagination.types';

export interface ICoupleState {
    couples: ICouple[];
    coupleDetail: ICouple;
    birdEggDetail: IBirdEgg;
    pagination: IPagination;
    loadingAll: boolean;
    loadingDetail: boolean;
    loadingModal: boolean;
    errors: HttpErrorResponse;
}
