import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { BirdFacade } from '../store/entities/bird/bird.facade';
import { IBird, IGetBirdsRequest } from '../types/bird.types';
import { IPagination } from '../types/pagination.types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'c-bird-overview',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss']
})
export class BirdComponent implements OnInit {

  // Observables
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public birds$: Observable<IBird[]> = this.birdFacade.getBirds();
  public pagination$: Observable<IPagination> = this.birdFacade.getPagination();
  public loading$: Observable<boolean> = this.birdFacade.getLoading();
  public search$: Subject<string> = new Subject<string>();

  // local variables
  public birds: IBird[];
  public pagination: IPagination;
  public search: string = '';
  public page: number = 1;
  public pageSize: number = 5;
  public first: number = (this.page - 1) * this.pageSize;

  constructor(private birdFacade: BirdFacade, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Subscribe to changes in the query parameters
    this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      let request: IGetBirdsRequest = {
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
      this.GetAllBirds(request);
    });
    // get all birds
    this.birds$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((birds: IBird[]) => {
      if (birds !== null || birds !== undefined) {
        this.birds = birds;
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

  public onSearch(searchTerm: string){
    this.search$.next(searchTerm);
  }

  public paginate(event: any) {
    this.page = event.page + 1;
    this.pageSize = event.rows;
    this.CalculateFirst();

    console.log("paginate", event);
    const request: IGetBirdsRequest = {
      page: this.page,
      pageSize: this.pageSize,
      searchValue: this.search
    };

    this.GetAllBirds(request);
  }

  public DeleteBird(id: number): void {
    console.log("deleting bird with id", id);
  }

  private CalculateFirst() {
    this.first = (this.page - 1) * this.pageSize;
  }

  private GetAllBirds(request: IGetBirdsRequest): void {
    this.birdFacade.getAllBirdsRequest(request);
  }
}
