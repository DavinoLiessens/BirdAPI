import { HttpErrorResponse } from "@angular/common/http";
import { IOwner } from "src/app/types/owner.types";
import { IPagination } from "src/app/types/pagination.types";

export interface IOwnerState {
    owners: IOwner[];
    ownerDetail: IOwner;
    pagination: IPagination;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
