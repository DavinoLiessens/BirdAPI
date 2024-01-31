import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CoupleFacade } from '../store/entities/couple/couple.facade';
import { ICouple, IGetCouplesRequest } from '../types/couple.types';
import { IPagination } from '../types/pagination.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'c-couple-overview',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss']
})
export class CoupleComponent implements OnInit {
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public couples$: Observable<ICouple[]> = this.coupleFacade.getCouples();
  public pagination$: Observable<IPagination> = this.coupleFacade.getPagination();
  public loading$: Observable<boolean> = this.coupleFacade.getLoading();
  public search$: Subject<string> = new Subject<string>();

  // local variables
  public couples: ICouple[];
  public pagination: IPagination;
  public search: string = '';
  public page: number = 1;
  public pageSize: number = 10;
  public first: number = (this.page - 1) * this.pageSize;

  constructor(private coupleFacade: CoupleFacade, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in the query parameters
    this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      let request: IGetCouplesRequest = {
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
      this.GetAllCouples(request);
    });

    // get all couples
    this.couples$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((couples: ICouple[]) => {
      if (couples !== null && couples !== undefined) {
        this.couples = couples;
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

    console.log("paginate", event);
    const request: IGetCouplesRequest = {
      page: this.page,
      pageSize: this.pageSize,
      searchValue: this.search
    };

    this.GetAllCouples(request);
  }


  public DeleteCouple(id: number): void {
    console.log("deleting couple with id", id);
  }

  private CalculateFirst() {
    this.first = (this.page - 1) * this.pageSize;
  }

  private GetAllCouples(request: IGetCouplesRequest): void {
    this.coupleFacade.getAllCouplesRequest(request);
  }
}
