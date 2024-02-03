import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { BirdFacade } from '../store/entities/bird/bird.facade';
import { IBird, IGetBirdsRequest } from '../types/bird.types';
import { IFilterRequest, IPagination } from '../types/pagination.types';
import { ActivatedRoute, Router } from '@angular/router';
import { IBirdTypeOption, IGenderOption, IYearDropdownOption } from '../types/dropdown.types';

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
  public pageSize: number = 10;
  public filters: IFilterRequest;
  public first: number = (this.page - 1) * this.pageSize;

  public genderOptions: IGenderOption[] = [];
  public selectedGender: string;

  public typeOfBirdOptions: IBirdTypeOption[] = [];
  public selectedTypeOfBird: number;

  public yearDropdownOptions: IYearDropdownOption[] = [];
  public selectedYear: string;

  constructor(private birdFacade: BirdFacade, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.createGenderOptions();
    this.createDateOptions();
    this.createTypeOfBirdOptions();
    this.filters = {
      gender: 'ALL',
      typeOfBird: '0',
      year: 'ALL'
    };

    // Subscribe to changes in the query parameters
    this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
      let request: IGetBirdsRequest = {
        page: this.page,
        pageSize: this.pageSize,
        searchValue: '',
        gender: this.filters.gender,
        typeOfBird: this.filters.typeOfBird,
        year: this.filters.year
      };

      if (Object.keys(params).length === 0){
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { search: this.search, gender: this.filters.gender, typeOfBird: this.filters.typeOfBird, year: this.filters.year },
          queryParamsHandling: 'merge',
        });
      }

      if (params.search) {
        this.search = params.search.toLowerCase();
        this.page = 1;
      }

      if (params.year) {
        this.selectedYear = params.year;
        this.filters.year = params.year;
      }

      if (params.gender) {
        this.selectedGender = params.gender;
        this.filters.gender = params.gender;
      }

      if (params.typeOfBird) {
        this.selectedTypeOfBird = parseInt(params.typeOfBird);
        this.filters.typeOfBird = params.typeOfBird;
      }

      request = {
        page: this.page,
        pageSize: this.pageSize,
        searchValue: this.search,
        gender: this.filters.gender,
        typeOfBird: this.filters.typeOfBird,
        year: this.filters.year
      };

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

  public onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  public paginate(event: any) {
    this.page = event.page + 1;
    this.pageSize = event.rows;
    this.CalculateFirst();

    const request: IGetBirdsRequest = {
      page: this.page,
      pageSize: this.pageSize,
      searchValue: this.search,
      gender: this.filters.gender,
      typeOfBird: this.filters.typeOfBird,
      year: this.filters.year
    };

    this.GetAllBirds(request);
  }

  public FilterYear(value: string) {
    this.page = 1;

    // Update the query parameter in the URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { year: value },
      queryParamsHandling: 'merge',
    });
  }

  public FilterGender(value: string) {
    this.page = 1;

    // Update the query parameter in the URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { gender: value },
      queryParamsHandling: 'merge',
    });
  }

  public FilterTypeOfBird(value: number) {
    this.page = 1;

    // Update the query parameter in the URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { typeOfBird: value.toString() },
      queryParamsHandling: 'merge',
    });
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

  private createGenderOptions(): void {
    this.genderOptions = [
      { type: 'Alles', value: 'ALL' },
      { type: 'Pop', value: 'FEMALE' },
      { type: 'Man', value: 'MALE' }
    ];
  }

  private createDateOptions(): void {
    // push the default
    this.yearDropdownOptions.push({ name: 'Alles', value: 'ALL' });

    // Get the current year
    const currentYear = new Date().getFullYear();

    // Populate the options array with years from 2020 to current year + 1
    for (let year = 2020; year <= currentYear + 1; year++) {
      // Create an IAutoCompleteOption object with value and label
      const option = {
        value: year.toString(),
        name: year.toString(),
      };

      this.yearDropdownOptions.push(option);
    }
  }

  private createTypeOfBirdOptions() {
    // push the default
    this.typeOfBirdOptions.push({ type: 'Alles', value: 0 });

    // add rest of the facade options
    var types = this.birdFacade.createBirdTypeOptions();

    types.forEach(type => {
      this.typeOfBirdOptions.push(type);
    });
  }
}
