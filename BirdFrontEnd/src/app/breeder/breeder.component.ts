import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
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

    // local variables
    public breeders: IBreeder[];

    constructor(
        private breederFacade: BreederFacade
    ) {}

    ngOnInit(): void {
        // get all breeders
        this.breeders$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((breeders: IBreeder[]) => {
            if (breeders === null || breeders === undefined) {
                const request: IGetBreedersRequest = {
                    page: 1,
                    pageSize: 10,
                }
                this.breederFacade.getAllBreedersRequest(request);
            }

            if (breeders !== null) {
                this.breeders = breeders;
            }
        });
    }

    public DeleteBreeder(id: number): void {
        console.log("deleting breeder with id", id);
    }
}
