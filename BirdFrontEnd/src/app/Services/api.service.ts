import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // SORTING AND FILTERING AND PAGING
  // BIRD
  public noBirds: number = 10;
  public sortItemBirds: string = 'Alles';
  public searchnameBird: string = '';
  public ringNumber: string;
  public kotNumber: number;
  public baseUrl: string = environment.webApiBaseUrl;

  // OWNER
  public noOwners: number = 10;
  public sortItemOwners: string = 'Alles';
  public searchnameOwner: string = '';

  constructor(private _http: HttpClient) { }

  // ***** BIRD CALLS *****
  GetAllBirds() {
    //return this._http.get<Bird[]>(`http://localhost:4000/api/v1/birds?name=${query}&length=${this.noBirds}&sort=${this.sortItemBirds}`);
    return this._http.get<Bird[]>(`${this.baseUrl}/birds?page=1&pageSize=10`);
  }

  GetBird(id: number) {
    return this._http.get<Bird>(`${this.baseUrl}/birds/${id}`);
  }

  CreateBird(newBird: CreateBird) {
    return this._http.post<CreateBird>(`${this.baseUrl}/birds`, newBird, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateBird(id: number, updateBird: ChangeBird) {
    return this._http.patch<ChangeBird>(`${this.baseUrl}/birds/${id}`, updateBird, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  DeleteBird(id: number) {
    return this._http.delete<Bird>(`${this.baseUrl}/birds/${id}`);
  }

  // ***** OWNER CALLS *****
  GetAllOwners() {
    //http://localhost:4000/api/v1/owners?name=davino&sort=voornaam&length=10&dir=asc
    // return this._http.get<Owner[]>(`${this.baseUrl}/owners?name=${this.searchnameOwner}&sort=${this.sortItemOwners}&length=${this.noOwners}&dir=asc`);
    return this._http.get<Owner[]>(`${this.baseUrl}/owners?page=1&pageSize=10`);

  }

  GetOwner(id: number) {
    return this._http.get<Owner>(`${this.baseUrl}/owners/${id}`);
  }

  CreateOwner(newOwner: Owner) {
    return this._http.post<Owner>(`${this.baseUrl}/owners`, newOwner, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  UpdateOwner(updateOwner: Owner) {
    return this._http.put<Owner>(`${this.baseUrl}/owners`, updateOwner);
  }

  DeleteOwner(id: number) {
    return this._http.delete<Owner>(`${this.baseUrl}/owners/${id}`);
  }

  // ***** COUPLE CALLS *****
  GetAllCouples() {
    return this._http.get<Couple[]>(`${this.baseUrl}/couples`);
  }

  GetCouple(id: number) {
    return this._http.get<Couple>(`${this.baseUrl}/couples/${id}`);
  }

  UpdateCouple(id: number, updateCouple: Couple) {
    return this._http.patch<Couple>(`${this.baseUrl}/couples/${id}`, updateCouple);
  }

  CreateCouple(newCouple: Couple) {
    return this._http.post<Couple>(`${this.baseUrl}/couples`, newCouple, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  DeleteCouple(id: number) {
    return this._http.delete<Couple>(`${this.baseUrl}/couples/${id}`);
  }
}

export interface Bird{
  id?: number;
  ringnummer: string;
  geslacht: string;
  soort: string;
  jaartal: number;
  kotnummer: number;
  ownerFullName: string;
  eigenaarID: number;
  eigenaar?: Owner;
  kweker: string;
  kleur: string;
  omschrijving: string;
}

export interface Owner{
  id?: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface CreateBird{
  ringnummer: string;
  geslacht: string;
  soort: string;
  jaartal: number;
  kotnummer: number;
  eigenaarID: number;
  kwekerID: string;
  kleur: string;
  omschrijving: string;
  isDood: boolean;
  isJong: boolean;
}

export interface ChangeBird {
  ringnummer: string;
  kotnummer: number;
  eigenaarID: number;
  kweker: string;
  omschrijving: string;
}

export interface Couple{
  id?: number;
  name: string;
  father: string;
  mother: string;
  child1: string;
  child2: string;
  child3: string;
  child4: string;
  child5: string;
  child6: string;
  description: string;
}