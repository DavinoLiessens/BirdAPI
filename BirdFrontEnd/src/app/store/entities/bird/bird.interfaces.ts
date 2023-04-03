import { HttpErrorResponse } from '@angular/common/http';
import { IBird } from 'src/app/types/bird.types';
import { IPagination } from 'src/app/types/pagination.types';

export interface IBirdState {
    birds: IBird[];
    birdDetail: IBird;
    pagination: IPagination;
    isFormValid: boolean;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
