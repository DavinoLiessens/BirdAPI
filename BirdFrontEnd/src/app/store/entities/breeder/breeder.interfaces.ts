import { HttpErrorResponse } from '@angular/common/http';

export interface IBreederState {
    breeders: any;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
