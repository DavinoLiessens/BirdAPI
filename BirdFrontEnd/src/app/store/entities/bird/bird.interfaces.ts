import { HttpErrorResponse } from '@angular/common/http';
import { IBird, IBirdDetail } from 'src/app/types/bird.types';
import { IPagination } from 'src/app/types/pagination.types';

export interface IBirdState {
    birds: IBird[];
    birdDetail: IBirdDetail;
    pagination: IPagination;
    isFormValid: boolean;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
