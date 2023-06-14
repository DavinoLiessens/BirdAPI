import { HttpErrorResponse } from '@angular/common/http';
import { ICouple } from 'src/app/types/couple.types';
import { IPagination } from 'src/app/types/pagination.types';

export interface ICoupleState {
    couples: ICouple[];
    coupleDetail: ICouple;
    pagination: IPagination;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
