import { Component, OnInit } from "@angular/core";
import { BreederService } from "../Services/breeder.service";
import { IGetBreedersRequest } from "../types/breeder.types";

@Component({
    selector: 'c-breeder-overview',
    templateUrl: './breeder.component.html',
    styleUrls: ['./breeder.component.scss']
})
export class BreederComponent implements OnInit {

    constructor(
        private breederService: BreederService
    ) {}

    ngOnInit(): void {
        const request: IGetBreedersRequest = {
            page: 1,
            pageSize: 10,
        }
        this.breederService.getAllBreeders(request);
        console.log("trigger");
    }
}
