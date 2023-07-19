import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OwnerFacade } from '../store/entities/owner/owner.facade';
import { IGetOwnersRequest, IOwner } from '../types/owner.types';
import { IPagination } from '../types/pagination.types';

@Component({
  selector: 'c-owner-overview',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  // Observables
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public owners$: Observable<IOwner[]> = this.ownerFacade.getOwners();
  public pagination$: Observable<IPagination> = this.ownerFacade.getPagination();
  public loading$: Observable<boolean> = this.ownerFacade.getLoading();
  public search$: Subject<string> = new Subject<string>();

  // local variables
  public owners: IOwner[];

  constructor(private ownerFacade: OwnerFacade) { }

  ngOnInit(): void {
    // get all owners
    this.owners$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owners: IOwner[]) => {
      if (owners === null || owners === undefined) {
        this.GetAllOwners();
      }

      if (owners !== null || owners !== undefined) {
        this.owners = owners;
      }
    });

    this.search$.pipe(
      takeUntil(this.destroyed$),
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      console.log(searchValue);
      if (searchValue !== null && searchValue !== undefined && searchValue !== "") {
        const search = searchValue.toLowerCase();
        this.owners = this.owners.filter(b => b.firstName.toLowerCase().includes(search) ||
          b.lastName.toLowerCase().includes(search) ||
          b.phoneNumber.toLowerCase().includes(search) ||
          b.email.toLowerCase().includes(search));
      }
      else {
        this.GetAllOwners();
      }
    });
  }

  public onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  public deleteOwner(id: number) {
    console.log("Deleting owner with id: ", id);
  }

  private GetAllOwners(): void {
    const request: IGetOwnersRequest = {
      page: 1,
      pageSize: 10,
    };
    this.ownerFacade.getAllOwnersRequest(request);
  }
}
