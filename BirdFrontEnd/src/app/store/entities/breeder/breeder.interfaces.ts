import { HttpErrorResponse } from '@angular/common/http';
import { IBreeder } from 'src/app/types/breeder.types';
import { IPagination } from 'src/app/types/pagination.types';

export interface IBreederState {
    breeders: IBreeder[];
    breederDetail: IBreeder;
    pagination: IPagination;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
