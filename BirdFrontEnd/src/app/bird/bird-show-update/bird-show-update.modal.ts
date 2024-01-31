import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BirdFacade } from "src/app/store/entities/bird/bird.facade";
import { IBirdShow, ICreateBirdShowRequest, IUpdateBirdShowRequest } from "src/app/types/bird.types";

@Component({
    selector: 'bird-show-update-modal',
    templateUrl: './bird-show-update.modal.html',
    providers: [DialogService]
})
export class BirdShowUpdateModal implements OnInit {
    public birdShowForm: FormGroup;
    public birdShow$: Observable<IBirdShow> = this.birdFacade.getBirdShow();
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
        // get birdShow
        this.birdFacade.getBirdShowRequest({ birdId: this.config.data.request.birdId, id: this.config.data.request.id });

        this.birdShow$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((birdShow: IBirdShow) => {
            if (birdShow !== null && birdShow !== undefined) {
                this.birdShowForm = this.fb.group({
                    location: [birdShow.location, Validators.required],
                    points: [birdShow.points, Validators.required],
                    rank: [birdShow.rank, Validators.required],
                });
            }            
        });
    } 

    public handleSubmit(): void {
        const request: IUpdateBirdShowRequest = {
            birdId: this.config.data.request.birdId,
            location: this.birdShowForm.get('location').value,
            points: this.birdShowForm.get('points').value,
            rank: this.birdShowForm.get('rank').value,
        };

        this.birdFacade.updateBirdShowRequest(this.config.data.request.id, request);

        this.birdFacade.onUpdateBirdShowSuccess().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.success('Tentoonstelling aangepast!', 'Gelukt', {
                timeOut: 6000,
            });

            this.birdFacade.getBirdRequest(this.config.data.request.birdId);
            this.ref.close();
        });

        this.birdFacade.onUpdateBirdShowError().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanpassen van deze tentoonstelling!', 'Error', {
                timeOut: 6000,
            });
        });
    }

    public goBack() {
        this.ref.close();
    }
}