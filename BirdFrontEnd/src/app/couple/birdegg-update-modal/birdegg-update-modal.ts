import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { CoupleFacade } from "src/app/store/entities/couple/couple.facade";
import { IBirdEgg, IBirdEggRequest, IUpdateBirdEggRequest } from "src/app/types/birdEgg.types";

@Component({
    selector: 'birdegg-update-modal',
    templateUrl: './birdegg-update-modal.html',
})
export class BirdEggUpdateModal implements OnInit {
    @Input() public request: IBirdEggRequest;

    private destroyed$: Subject<boolean> = new Subject<boolean>();
    public loading$: Observable<boolean> = this.coupleFacade.getLoadingModal();
    public birdEgg$: Observable<IBirdEgg> = this.coupleFacade.getBirdEgg();

    public birdEggForm: FormGroup;
    public birdEgg: IBirdEgg;

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private coupleFacade: CoupleFacade,
        private fb: FormBuilder,
        private toastrService: ToastrService
    ) { }

    public ngOnInit(): void {
        // get birdEgg with id
        this.coupleFacade.getBirdEggRequest(this.config.data.request);

        this.birdEgg$.pipe(
            takeUntil(this.destroyed$),
        ).subscribe((birdEgg: IBirdEgg) => {
            if (birdEgg !== null && birdEgg !== undefined) {
                this.birdEgg = birdEgg;
                this.createForm(birdEgg);
            }
        });
    }

    public handleSubmit(): void {
        const cameOutOn = this.birdEggForm.get('cameOutOn').value;
        const flyOutOn = this.birdEggForm.get('flyOutOn').value;
        const ringNumber = this.birdEggForm.get('ringNumber').value;
        const request: IUpdateBirdEggRequest = {
            id: this.birdEgg.id,
            layedOn: this.birdEgg.layedOn,
            coupleId: this.birdEgg.coupleId,
            cameOutOn: cameOutOn !== '' ? cameOutOn : null,
            flyOutOn:  flyOutOn !== '' ? flyOutOn : null,
            ringNumber:  ringNumber !== '' ? ringNumber : null
        };       
        
        // facade update Birdegg
        this.coupleFacade.updateBirdEggRequest(request);

        this.coupleFacade.onUpdateBirdEggSuccess().pipe(
            takeUntil(this.destroyed$),
        ).subscribe(() => {
            // add toastr message
            this.toastrService.success('Ei aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });

            this.coupleFacade.getCoupleRequest(this.config.data.request.coupleId);
            this.coupleFacade.clearBirdEggDetail();

            this.ref.close();
        });

        this.coupleFacade.onUpdateBirdEggError().pipe(
            takeUntil(this.destroyed$),
        ).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het updaten van dit ei!', 'Error', {
                timeOut: 6000,
            });
        });
    }

    private createForm(birdEgg: IBirdEgg) {
        this.birdEggForm = this.fb.group({
            layedOn: [{ value: birdEgg.layedOn ? new Date(birdEgg.layedOn) : '', disabled: true }],
            cameOutOn: [birdEgg.cameOutOn ? new Date(birdEgg.cameOutOn) : ''],
            flyOutOn: [birdEgg.flyOutOn ? new Date(birdEgg.flyOutOn) : ''],
            ringNumber: [birdEgg.ringNumber]
        });

    }
}