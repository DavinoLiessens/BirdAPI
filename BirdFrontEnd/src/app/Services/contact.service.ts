import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import {
  ICreateContactRequest,
  IGetContactsRequest,
  IContact,
  IContactsResponse,
  IUpdateContactRequest,
} from '../types/contact.types';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private readonly httpService: BaseHttpService) {}

  getAllContacts(request: IGetContactsRequest): Observable<IContactsResponse> {
    return this.httpService.get<IContactsResponse>('/contacts', {
      params: request as any,
    });
  }

  getContact(contactId: number): Observable<IContact> {
    return this.httpService.get<IContact>(`/contacts/${contactId}`);
  }

  createContact(request: ICreateContactRequest): Observable<void> {
    return this.httpService.post<void>('/contacts', request);
  }

  updateContact(request: IUpdateContactRequest): Observable<void> {
    return this.httpService.put<void>(`/contacts/${request.id}`, request);
  }
}
