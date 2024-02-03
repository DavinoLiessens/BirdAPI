import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { BreederFacade } from "../store/entities/breeder/breeder.facade";
import { IBreeder, IGetBreedersRequest } from "../types/breeder.types";
import { IPagination } from "../types/pagination.types";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'c-breeder-overview',
    templateUrl: './breeder.component.html',
    styleUrls: ['./breeder.component.scss']
})
export class BreederComponent implements OnInit {

    // Observables
    private destroyed$: Subject<boolean> = new Subject<boolean>();
    public breeders$: Observable<IBreeder[]> = this.breederFacade.getBreeders();
    public pagination$: Observable<IPagination> = this.breederFacade.getPagination();
    public loading$: Observable<boolean> = this.breederFacade.getLoading();
    public search$: Subject<string> = new Subject<string>();

    // local variables
    public breeders: IBreeder[];
    public pagination: IPagination;
    public search: string = '';
    public page: number = 1;
    public pageSize: number = 10;
    public first: number = (this.page - 1) * this.pageSize;

    constructor(
        private breederFacade: BreederFacade,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // Subscribe to changes in the query parameters
        this.route.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((params) => {
        let request: IGetBreedersRequest = {
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
        this.GetAllBreeders(request);
        });

        // get all breeders
        this.breeders$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((breeders: IBreeder[]) => {
            if (breeders !== null) {
                this.breeders = breeders;
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

        const request: IGetBreedersRequest = {
        page: this.page,
        pageSize: this.pageSize,
        searchValue: this.search
        };

        this.GetAllBreeders(request);
    }

    public DeleteBreeder(id: number): void {
        console.log("deleting breeder with id", id);
    }

    private CalculateFirst() {
        this.first = (this.page - 1) * this.pageSize;
    }

    private GetAllBreeders(request: IGetBreedersRequest): void {
        this.breederFacade.getAllBreedersRequest(request);
    }
}
