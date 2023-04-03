import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  // local variables
  public owners: IOwner[];

  constructor(private ownerFacade: OwnerFacade) { }

  ngOnInit(): void {
    // get all owners
    this.owners$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owners: IOwner[]) => {
      if (owners === null || owners === undefined) {
        const request: IGetOwnersRequest = {
          page: 1,
          pageSize: 10,
        };
        this.ownerFacade.getAllOwnersRequest(request);
      }

      if (owners !== null || owners !== undefined) {
        this.owners = owners;
      }
    });
  }

  public deleteOwner(id: number) {
    console.log("Deleting owner with id: ", id);
  }
}
