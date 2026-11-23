import { Injectable } from "@angular/core";
import { ofType } from "@ngrx/effects";
import { ActionsSubject, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ICreateContactRequest, IGetContactsRequest, IContact, IUpdateContactRequest } from "src/app/types/contact.types";
import { IPagination } from "src/app/types/pagination.types";
import { IAppState } from "../../store.interface";
import * as actions from './contact.actions';
import * as selectors from './contact.selectors';

@Injectable()
export class ContactFacade {
    constructor(
        private store: Store<IAppState>,
        private action$: ActionsSubject
    ) { }
    
    // Selectors
    public getContacts(): Observable<IContact[]> {
        return this.store.select(selectors.selectContacts);
    }

    public getContact(): Observable<IContact> {
        return this.store.select(selectors.selectContact);
    }

    public getPagination(): Observable<IPagination> {
        return this.store.select(selectors.selectPagination);
    }
    
    public getLoading(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingAll);
    }
    
    public getLoadingDetail(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingDetail);
    }

    public clearDetail(): void {
        this.store.dispatch(actions.clearContactDetail());
    }
    
    // Actions
    public getAllContactsRequest(request: IGetContactsRequest): void {
        this.store.dispatch(actions.getContacts({ request }));
    }

    public getContactRequest(contactId: number): void {
        this.store.dispatch(actions.getContact({ contactId }));
    }

    public createContact(request: ICreateContactRequest): void {
        this.store.dispatch(actions.createContact({ request }));
    }

    public updateContactRequest(request: IUpdateContactRequest): void {
        this.store.dispatch(actions.updateContact({ request }));
    }

    // ActionSubjects
    public onCreateContactSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createContactSuccess.type));
    }

    public onCreateContactError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createContactError.type));
    }

    public onUpdateContactSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateContactSuccess.type));
    }

    public onUpdateContactError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateContactError.type));
    }
}
