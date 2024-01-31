import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { birdReducer } from 'src/app/store/entities/bird/bird.reducer';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { IBird, IBirdDetail, IBirdShowRequest, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';
import { IOwnerDropdownOption } from 'src/app/types/dropdown.types';
import { IGetOwnersRequest, IOwner } from 'src/app/types/owner.types';
import { BirdShowCreateModal } from '../bird-show-create/bird-show-create.modal';
import { BirdShowUpdateModal } from '../bird-show-update/bird-show-update.modal';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.scss']
})
export class BirdDetailComponent implements OnInit {

  // local variables
  public birdForm: FormGroup;
  public birdId: string;
  public owners: IOwnerDropdownOption[] = [];
  public bird: IBirdDetail;

  // Observables
  public bird$: Observable<IBirdDetail> = this.birdFacade.getBird();
  public owners$: Observable<IOwner[]> = this.ownerFacade.getOwners();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.birdFacade.getLoadingDetail();
  private owner: IOwnerDropdownOption;

  constructor(
    private fb: FormBuilder,
    private birdFacade: BirdFacade,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.birdId = this.route.snapshot.params?.id;
    this.birdFacade.getBirdRequest(parseInt(this.birdId));

    this.bird$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((bird: IBirdDetail) => {
      if (bird !== null && bird !== undefined) {
        this.bird = bird;
        this.createDefaultForm(bird);
      }
    });

    // get breeders and owners
    this.getAllOwners();

    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();
  }

  public onSubmit() {
    const request: IUpdateBirdRequest = {
      id: parseInt(this.birdId),
      ringNumber: this.birdForm.get('ringNumber').value,
      cageNumber: this.birdForm.get('cageNumber').value,
      ownerId: this.birdForm.get('owner').value,
      description: this.birdForm.get('description').value ?? '',
      isDead: this.birdForm.get('isDead').value
    };

    this.birdFacade.updateBirdRequest(request);
    this.birdFacade.clearDetail();
  }

  public goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  public goToCouple(coupleId: number){
    this.router.navigate([`couples/detail/${coupleId}`]);
  }

  public goToBirthTree(){
    this.router.navigate([`couples/detail/${this.bird.parents.coupleId}`]);
  }

  private createDefaultForm(bird: IBirdDetail): void {
    this.birdForm = this.fb.group({
      ringNumber: [bird.ringNumber, Validators.required],
      gender: [{ value: bird.gender, disabled: true }, Validators.required],
      birdType: [{ value: bird.birdType, disabled: true }, Validators.required],
      birthDate: [{ value: null, disabled: true }, Validators.required],
      color: [{ value: bird.color, disabled: true }, Validators.required],
      cageNumber: [bird.cageNumber, Validators.required],
      breeder: [{ value: `${bird.breeder.firstName} ${bird.breeder.lastName}`, disabled: true }, Validators.required],
      owner: [bird.owner.id, Validators.required],
      description: [bird.description],
      isDead: [bird.isDead]
    });

    // set calendar value
    this.birdForm.get('birthDate').setValue(new Date(bird.birthDate).toISOString().split('T')[0]);
  }

  private getAllOwners(): void {
    this.owners$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owners: IOwner[]) => {
      // fetch owners if null or undefined
      if (owners === null || owners === undefined) {
        const request: IGetOwnersRequest = {
          page: 1,
          pageSize: 10,
        };
        this.ownerFacade.getAllOwnersRequest(request);
      }

      if (owners !== null && owners !== undefined) {
        owners.forEach((owner: IOwner) => {
          const fullname = owner.firstName + " " + owner.lastName;
          this.owners.push({ name: fullname, value: owner.id });
        });
      }
    });
  }

  public openCreateBirdShowModel(birdId: number) {
    // open modal and pass id
    const ref = this.dialogService.open(BirdShowCreateModal, {
      header: 'Tentoonstelling toevoegen',
      width: 'auto',
      height: 'auto',
      contentStyle: { overflow: 'visible' },
      data: {
        birdId
      }
    });
  }

  public openUpdateBirdShowModel(birdId: number, id: number) {
    const request: IBirdShowRequest = {
      birdId,
      id
    };

    // open update modal
    var ref: DynamicDialogRef = this.dialogService.open(BirdShowUpdateModal, {
      header: 'Tentoonstelling bewerken',
      width: 'auto',
      height: 'auto',
      contentStyle: { overflow: 'visible' },
      data: {
        request
      }
    });

    ref.onClose.subscribe(() => {
      this.birdFacade.clearBirdShowDetail();
    });
  }

  private handleSuccesses(): void {
    this.birdFacade.onUpdateBirdSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Vogel gegevens aangepast!', 'Gelukt', {
        timeOut: 6000,
      });

      const request: IGetBirdsRequest = {
        page: 1,
        pageSize: 10,
      }
      this.birdFacade.getAllBirdsRequest(request);

      this.birdFacade.clearDetail();
      this.goBack();
    });
  }

  private handleErrors(): void {
    this.birdFacade.onUpdateBirdError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze vogel!', 'Error', {
        timeOut: 6000,
      });
    });
  }
}
