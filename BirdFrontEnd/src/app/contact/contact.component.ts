import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ContactFacade } from '../store/entities/contact/contact.facade';
import { IGetContactsRequest, IContact } from '../types/contact.types';
import { IPagination } from '../types/pagination.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'c-contact-overview',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactComponent implements OnInit, OnDestroy {

  // Observables
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public contacts$: Observable<IContact[]> = this.contactFacade.getContacts();
  public pagination$: Observable<IPagination> = this.contactFacade.getPagination();
  public loading$: Observable<boolean> = this.contactFacade.getLoading();
  public search$: Subject<string> = new Subject<string>();

  // local variables
  public contacts: IContact[];
  public pagination: IPagination;
  public search: string = '';
  public page: number = 1;
  public pageSize: number = 10;
  public first: number = (this.page - 1) * this.pageSize;

  constructor(private contactFacade: ContactFacade, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in the query parameters
    this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      let request: IGetContactsRequest = {
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
      this.GetAllContacts(request);
    });

    // get all contacts
    this.contacts$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((contacts: IContact[]) => {
      if (contacts !== null || contacts !== undefined) {
        this.contacts = contacts;
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

    const request: IGetContactsRequest = {
      page: this.page,
      pageSize: this.pageSize,
      searchValue: this.search
    };

    this.GetAllContacts(request);
  }

  public deleteContact(id: number) {
    console.log("Deleting contact with id: ", id);
  }

  private CalculateFirst() {
    this.first = (this.page - 1) * this.pageSize;
  }

  private GetAllContacts(request: IGetContactsRequest): void {
    this.contactFacade.getAllContactsRequest(request);
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
