import { HttpErrorResponse } from "@angular/common/http";
import { IContact } from "src/app/types/contact.types";
import { IPagination } from "src/app/types/pagination.types";

export interface IContactState {
    contacts: IContact[];
    contactDetail: IContact;
    pagination: IPagination;
    loadingAll: boolean;
    loadingDetail: boolean;
    errors: HttpErrorResponse;
}
