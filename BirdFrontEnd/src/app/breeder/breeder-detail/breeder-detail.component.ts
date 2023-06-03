import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BreederFacade } from "src/app/store/entities/breeder/breeder.facade";
import { IBreeder, IGetBreedersRequest, IUpdateBreederRequest } from "src/app/types/breeder.types";

@Component({
    selector: 'c-breeder-detail',
    templateUrl: './breeder-detail.component.html',
    styleUrls: ['./breeder-detail.component.scss']
})
export class BreederDetailComponent implements OnInit {

    // Observables
    public breeder$: Observable<IBreeder> = this.breederFacade.getBreeder();
    private destroyed$: Subject<boolean> = new Subject<boolean>();
    public loading$: Observable<boolean> = this.breederFacade.getLoadingDetail();

    // local variables
    public breederId: string;
    public breederForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private breederFacade: BreederFacade,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
        this.breederId = this.route.snapshot.params?.id;
        this.breederFacade.getBreederRequest(parseInt(this.breederId));

        this.breeder$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((breeder: IBreeder) => {
            if (breeder !== null && breeder !== undefined) {
                this.breederForm = this.fb.group({
                    firstName: [breeder.firstName, Validators.required],
                    lastName: [breeder.lastName, Validators.required],
                    phoneNumber: [breeder.phoneNumber, Validators.required],
                    email: [breeder.email, Validators.required],
                });
            }
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();

    }

    public onSubmit() {
        const request: IUpdateBreederRequest = {
            id: parseInt(this.breederId),
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value,
        };

        this.breederFacade.updateBreederRequest(request);
    }

    public goBack() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }

    private handleSuccesses(): void {
        this.breederFacade.onUpdateBreederSuccess().pipe(
            takeUntil(this.destroyed$),
        ).subscribe(() => {
            this.toastrService.success('Kweker gegevens aangepast!', 'Gelukt', {
                timeOut: 6000,
            });

            const request: IGetBreedersRequest = {
                page: 1,
                pageSize: 10,
            }
            this.breederFacade.getAllBreedersRequest(request);
            this.breederFacade.clearDetail();
            
            this.goBack();
        });
    }

    private handleErrors(): void {
        this.breederFacade.onUpdateBreederError().pipe(
            takeUntil(this.destroyed$),
        ).subscribe(() => {
            this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze kweker!', 'Error', {
                timeOut: 6000,
            });
        });
    }
}
