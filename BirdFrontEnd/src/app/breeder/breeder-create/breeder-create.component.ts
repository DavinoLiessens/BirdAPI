import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { BreederFacade } from "src/app/store/entities/breeder/breeder.facade";
@Component({
    selector: 'c-breeder-create',
    templateUrl: './breeder-create.component.html',
    styleUrls: ['./breeder-create.component.scss']
})
export class BreederCreateComponent implements OnInit {

    // local variables
    public breederForm;

    constructor(
        private fb: FormBuilder,
        private breederFacade: BreederFacade,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        // fill in the form
        this.breederForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            email: ['', Validators.required],
        });
    }

    public onSubmit() {
        const request: any = {
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value
        };

        // call facade

    }

    public goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
}