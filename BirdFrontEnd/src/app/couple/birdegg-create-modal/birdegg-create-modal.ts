import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { SelectItemGroup } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { BirdFacade } from "src/app/store/entities/bird/bird.facade";
import { CoupleFacade } from "src/app/store/entities/couple/couple.facade";
import { ICreateBirdEggRequest } from "src/app/types/birdEgg.types";
import { IGenderOption } from "src/app/types/dropdown.types";

@Component({
    selector: 'birdegg-create-modal',
    templateUrl: './birdegg-create-modal.html',
    providers: [DialogService]
})
export class BirdEggCreateModal implements OnInit {
    public birdEggForm: FormGroup;
    private destroyed$: Subject<boolean> = new Subject<boolean>();
    public loading$: Observable<boolean> = this.coupleFacade.getLoadingModal();
    public groupedColors: SelectItemGroup[] = [];
    public genderOptions: IGenderOption[] = [];
    
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig,
        private coupleFacade: CoupleFacade,
        private birdFacade: BirdFacade,
        private fb: FormBuilder,
        private toastrService: ToastrService
    ) { }

    public ngOnInit(): void {
        this.birdEggForm = this.fb.group({
            layedOn: ['', Validators.required],
            cameOutOn: [null],
            flyOutOn: [null],
            ringNumber: [null],
            color: [null],
            gender: [null],
        });

        this.groupedColors = this.birdFacade.createBirdTypeColors();
        this.createGenderOptions();
    }

    public handleSubmit(): void {
        const request: ICreateBirdEggRequest = {
            id: null,
            layedOn: this.birdEggForm.get('layedOn').value,
            coupleId: this.config.data.coupleId,
            cameOutOn: this.birdEggForm.get('cameOutOn').value ?? null,
            flyOutOn: this.birdEggForm.get('flyOutOn').value ?? null,
            ringNumber: this.birdEggForm.get('ringNumber').value ?? null,
            color: this.birdEggForm.get('color').value ?? null,
            gender: this.birdEggForm.get('gender').value ?? null,
        }

        this.coupleFacade.createBirdEgg(request);

        this.coupleFacade.onCreateBirdEggSuccess().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.success('Ei aangemaakt!', 'Gelukt', {
                timeOut: 6000,
            });

            this.coupleFacade.getCoupleRequest(this.config.data.coupleId);
            this.ref.close();
        });

        this.coupleFacade.onCreateBirdEggError().pipe(
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // add toastr message
            this.toastrService.error('Oeps, er liep iets mis met het aanmaken van dit ei!', 'Error', {
                timeOut: 6000,
            });
        });
    }

    public goBack() {
        this.ref.close();
    }
    
    private createGenderOptions(): void {
        this.genderOptions = [
          { type: 'Pop', value: 'FEMALE' },
          { type: 'Man', value: 'MALE' }
        ];
    }
}