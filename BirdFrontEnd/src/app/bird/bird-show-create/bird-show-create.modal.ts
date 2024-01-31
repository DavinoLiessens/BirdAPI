import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BirdFacade } from "src/app/store/entities/bird/bird.facade";
import { ICreateBirdShowRequest } from "src/app/types/bird.types";

@Component({
    selector: 'bird-show-create-modal',
    templateUrl: './bird-show-create.modal.html',
    providers: [DialogService]
})
export class BirdShowCreateModal implements OnInit {
    public birdShowForm: FormGroup;
    private destroyed$: Subject<boolean> = new Subject<boolean>();
    public loading$: Observable<boolean> = this.birdFacade.getLoadingModal();

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private birdFacade: BirdFacade,
        private fb: FormBuilder,
        private toastrService: ToastrService
    ) {}

    ngOnInit(): void {
        this.birdShowForm = this.fb.group({
            location: ['', Validators.required],
            points: [null, Validators.required],
            rank: [null, Validators.required],
        });
    } 

    public handleSubmit(): void {
        const request: ICreateBirdShowRequest = {
            birdId: this.config.data.birdId,
            location: this.birdShowForm.get('location').value,
            points: this.birdShowForm.get('points').value,
            rank: this.birdShowForm.get('rank').value,
        }

        this.birdFacade.createBirdShowRequest(request);

        this.birdFacade.onCreateBirdShowSuccess().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.success('Tentoonstelling aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });

            this.birdFacade.getBirdRequest(this.config.data.birdId);
            this.ref.close();
        });

        this.birdFacade.onCreateBirdShowError().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanmaken van deze tentoonstelling!', 'Error', {
                timeOut: 6000,
            });
        });
    }

    public goBack() {
        this.ref.close();
    }
}