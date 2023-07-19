import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { BreederFacade } from "../store/entities/breeder/breeder.facade";
import { IBreeder, IGetBreedersRequest } from "../types/breeder.types";
import { IPagination } from "../types/pagination.types";

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

    constructor(
        private breederFacade: BreederFacade
    ) { }

    ngOnInit(): void {
        // get all breeders
        this.breeders$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((breeders: IBreeder[]) => {
            if (breeders === null || breeders === undefined) {
                this.GetAllBreeders();
            }

            if (breeders !== null) {
                this.breeders = breeders;
            }
        });

        this.search$.pipe(
            takeUntil(this.destroyed$),
            debounceTime(500)
        ).subscribe((searchValue: string) => {
            console.log(searchValue);
            if (searchValue !== null && searchValue !== undefined && searchValue !== "") {
                const search = searchValue.toLowerCase();
                this.breeders = this.breeders.filter(b => b.firstName.toLowerCase().includes(search) ||
                    b.lastName.toLowerCase().includes(search) ||
                    b.phoneNumber.toLowerCase().includes(search) ||
                    b.email.toLowerCase().includes(search));
            }
            else {
                this.GetAllBreeders();
            }
        });

    }

    public onSearch(searchTerm: string) {
        this.search$.next(searchTerm);
    }

    public DeleteBreeder(id: number): void {
        console.log("deleting breeder with id", id);
    }

    private GetAllBreeders(): void {
        const request: IGetBreedersRequest = {
            page: 1,
            pageSize: 10,
        };
        this.breederFacade.getAllBreedersRequest(request);
    }
}
