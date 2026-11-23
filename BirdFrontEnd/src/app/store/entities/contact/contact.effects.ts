import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, switchMap } from "rxjs/operators";
import { ContactService } from "src/app/Services/contact.service";
import { ICreateContactRequest, IGetContactsRequest, IContact, IContactsResponse, IUpdateContactRequest } from "src/app/types/contact.types";
import * as actions from './contact.actions';

@Injectable()
export class ContactEffects {
    constructor(
        private actions$: Actions,
        private contactService: ContactService
    ) { }

    // fetch contacts
    getContacts$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getContacts.type),
        switchMap(({ request }: { request: IGetContactsRequest }) => this.contactService.getAllContacts(request).pipe(
            map((contacts: IContactsResponse) => actions.getContactsSuccess({ contacts: contacts })),
            catchError((error: any) => of(actions.getContactsError({ error }))),
        ))
    ));

    // fetch contact
    getContact$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getContact.type),
        switchMap(({ contactId }: { contactId: number }) => this.contactService.getContact(contactId).pipe(
            map((contact: IContact) => actions.getContactSuccess({ contactDetail: contact })),
            catchError((error: any) => of(actions.getContactError({ error }))),
        ))
    ));

    // create contact
    createContacts$ = createEffect(() => this.actions$.pipe(
        ofType(actions.createContact.type),
        concatMap(({ request }: { request: ICreateContactRequest }) => this.contactService.createContact(request).pipe(
            map(() => actions.createContactSuccess()),
            catchError((error: any) => of(actions.createContactError({ error }))),
        ))
    ));

    // update contact
    updateContacts$ = createEffect(() => this.actions$.pipe(
        ofType(actions.updateContact.type),
        concatMap(({ request }: { request: IUpdateContactRequest }) => this.contactService.updateContact(request).pipe(
            map(() => actions.updateContactSuccess()),
            catchError((error: any) => of(actions.updateContactError({ error }))),
        ))
    ));
}
