import { HttpErrorResponse } from '@angular/common/http';

export interface IBirdState {
    birds: any;
    isFormValid: boolean;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
