import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BreederFacade } from "src/app/store/entities/breeder/breeder.facade";
import { IGetBreedersRequest } from "src/app/types/breeder.types";
@Component({
    selector: 'c-breeder-create',
    templateUrl: './breeder-create.component.html',
    styleUrls: ['./breeder-create.component.scss']
})
export class BreederCreateComponent implements OnInit {

    // local variables
    public breederForm: FormGroup;
    private destroyed$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private fb: FormBuilder,
        private breederFacade: BreederFacade,
        private router: Router,
        private route: ActivatedRoute,
        private toastrService: ToastrService
    ) { }

    ngOnInit(): void {
        // fill in the form
        this.breederForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            email: ['', Validators.required],
        });
        // handle success and errors
        this.handleSuccesses();
        this.handleErrors();

    }

    public onSubmit() {
        const request: any = {
            firstName: this.breederForm.get('firstName').value,
            lastName: this.breederForm.get('lastName').value,
            phoneNumber: this.breederForm.get('phoneNumber').value,
            email: this.breederForm.get('email').value
        };

        this.breederFacade.createBreeder(request);

    }

    public goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    private handleSuccesses(): void {
        this.breederFacade.onCreateBreederSuccess().pipe(
          takeUntil(this.destroyed$),
        ).subscribe(() => {
          this.toastrService.success('Kweker aangemaakt!', 'Gelukt', {
            timeOut: 6000,
          });
    
          const request: IGetBreedersRequest = {
            page: 1,
            pageSize: 10,
          }
          this.breederFacade.getAllBreedersRequest(request);
    
          this.goBack();
        });
      }
    
      private handleErrors(): void {
        this.breederFacade.onCreateBreederError().pipe(
          takeUntil(this.destroyed$),
        ).subscribe(() => {
          this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze kweker!', 'Error', {
            timeOut: 6000,
          });
        });
      }
    
}
