import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { birdReducer } from 'src/app/store/entities/bird/bird.reducer';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { IBird, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';
import { IOwnerDropdownOption } from 'src/app/types/dropdown.types';
import { IGetOwnersRequest, IOwner } from 'src/app/types/owner.types';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.scss']
})
export class BirdDetailComponent implements OnInit {

  // local variables
  public birdForm: FormGroup;
  public birdId: string;
  public ownerFullName: string;
  public owners: IOwnerDropdownOption[] = [];

  // Observables
  public bird$: Observable<IBird> = this.birdFacade.getBird();
  public owners$: Observable<IOwner[]> = this.ownerFacade.getOwners();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.birdFacade.getLoadingDetail();
  
  constructor(
    private fb: FormBuilder,
    private birdFacade: BirdFacade,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.birdId = this.route.snapshot.params?.id;

    this.bird$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((bird: IBird) => {
      if (bird === null || bird === undefined) {
        if (this.birdId !== null && this.birdId !== undefined) {
          this.birdFacade.getBirdRequest(parseInt(this.birdId));
        }
      }
      else {
        // set form
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
      ownerId: this.birdForm.get('owner').value.value,
      description: this.birdForm.get('description').value,
      isDead: this.birdForm.get('isDead').value,
      isChild: this.birdForm.get('isChild').value,
    };

    this.birdFacade.updateBirdRequest(request);
  }

  public goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private createDefaultForm(bird: IBird): void {
    this.birdForm = this.fb.group({
      ringNumber: [bird.ringNumber, Validators.required],
      gender: [{ value: bird.gender, disabled: true }, Validators.required],
      birdType: [{ value: bird.birdType, disabled: true }, Validators.required],
      birthDate: [{ value: null, disabled: true }, Validators.required],
      color: [{ value: bird.color, disabled: true }, Validators.required],
      cageNumber: [bird.cageNumber, Validators.required],
      breeder: [{ value: `${bird.breeder.firstName} ${bird.breeder.lastName}`, disabled: true }, Validators.required],
      owner: [{ name: `${bird.owner.firstName} ${bird.owner.lastName}`, value: bird.owner.id }, Validators.required],
      description: [bird.description],
      isDead: [bird.isDead],
      isChild: [bird.isChild],
      isFather: [false, Validators.required],
      isMother: [false, Validators.required]
    });

    // set calendar value
    this.birdForm.get('birthDate').setValue(new Date(bird.birthDate).toISOString().split('T')[0]);
    this.ownerFullName = `${bird.owner.firstName} ${bird.owner.lastName}`;
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
