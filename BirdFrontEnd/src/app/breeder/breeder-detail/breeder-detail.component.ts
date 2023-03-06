import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BreederFacade } from "src/app/store/entities/breeder/breeder.facade";
import { IBreeder, IUpdateBreederRequest } from "src/app/types/breeder.types";

@Component({
    selector: 'c-breeder-detail',
    templateUrl: './breeder-detail.component.html',
    styleUrls: ['./breeder-detail.component.scss']
})
export class BreederDetailComponent implements OnInit {

    // Observables
    public breeder$: Observable<IBreeder> = this.breederFacade.getBreeder();
    private destroyed$: Subject<boolean> = new Subject<boolean>();

    // local variables
    public breederId: string;
    public breederForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private breederFacade: BreederFacade,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        console.log(this.route.snapshot.params?.id);
        this.breederId = this.route.snapshot.params?.id;

        this.breeder$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((breeder: IBreeder) => {
            if (breeder === null || breeder === undefined) {
                this.breederFacade.getBreederRequest(parseInt(this.breederId));
            }
            else {
                // fill in the form
                this.breederForm = this.fb.group({
                    firstName: [breeder.firstName, Validators.required],
                    lastName: [breeder.lastName, Validators.required],
                    phoneNumber: [breeder.phoneNumber, Validators.required],
                    email: [breeder.email, Validators.required],
                });
            }
        });
    }

    public onSubmit() {
        const request: IUpdateBreederRequest = {
            id: parseInt(this.breederId),
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value,
        };

        console.log(request);
        this.breederFacade.updateBreederRequest(request);
    }

    public goBack() {
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
}
