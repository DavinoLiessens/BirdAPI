import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { OwnerFacade } from '../store/entities/owner/owner.facade';
import { IGetOwnersRequest, IOwner } from '../types/owner.types';
import { IPagination } from '../types/pagination.types';
import { ActivatedRoute, Router } from '@angular/router';

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
  public pagination: IPagination;
  public search: string = '';
  public page: number = 1;
  public pageSize: number = 10;
  public first: number = (this.page - 1) * this.pageSize;

  constructor(private ownerFacade: OwnerFacade, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in the query parameters
    this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      let request: IGetOwnersRequest = {
        page: this.page,
        pageSize: this.pageSize,
        searchValue: ''
      };

      if (params.search) {
        // Assign the 'search' parameter to the search field
        const search = params.search.toLowerCase();
        this.search = search;
        this.page = 1;

        request = {
          page: this.page,
          pageSize: this.pageSize,
          searchValue: search
        };
      }

      this.CalculateFirst();
      this.GetAllOwners(request);
    });

    // get all owners
    this.owners$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owners: IOwner[]) => {
      if (owners !== null || owners !== undefined) {
        this.owners = owners;
      }
    });

    this.pagination$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((pagination: IPagination) => {
      this.pagination = pagination;
      this.CalculateFirst();
    });

    this.search$.pipe(
      takeUntil(this.destroyed$),
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      if (searchValue !== null && searchValue !== undefined) {
        const search = searchValue.toLowerCase();

        // Update the query parameter in the URL
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { search: search },
          queryParamsHandling: 'merge',
        });
      }
    });
  }

  public onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  public paginate(event: any) {
    this.page = event.page + 1;
    this.pageSize = event.rows;
    this.CalculateFirst();

    const request: IGetOwnersRequest = {
      page: this.page,
      pageSize: this.pageSize,
      searchValue: this.search
    };

    this.GetAllOwners(request);
  }

  public deleteOwner(id: number) {
    console.log("Deleting owner with id: ", id);
  }

  private CalculateFirst() {
    this.first = (this.page - 1) * this.pageSize;
  }

  private GetAllOwners(request: IGetOwnersRequest): void {
    this.ownerFacade.getAllOwnersRequest(request);
  }
}
