import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { BreederFacade } from 'src/app/store/entities/breeder/breeder.facade';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { ICreateBirdRequest, IGetBirdsRequest } from 'src/app/types/bird.types';
import { IBreeder, IGetBreedersRequest } from 'src/app/types/breeder.types';
import { IBirdTypeOption, IBreederDropdownOption, IGenderOption, IOwnerDropdownOption } from 'src/app/types/dropdown.types';
import { IGetOwnersRequest, IOwner } from 'src/app/types/owner.types';

@Component({
  selector: 'c-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.scss']
})
export class BirdCreateComponent implements OnInit {

  // local variables
  public birdForm: FormGroup;

  public genderOptions: IGenderOption[] = [];
  public typeOfBirdOptions: IBirdTypeOption[] = [];
  public groupedColors: SelectItemGroup[] = [];
  public breeders: IBreederDropdownOption[] = [];
  public owners: IOwnerDropdownOption[] = [];

  // Observables
  public breeders$: Observable<IBreeder[]> = this.breederFacade.getBreeders();
  public owners$: Observable<IOwner[]> = this.ownerFacade.getOwners();
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private birdFacade: BirdFacade,
    private breederFacade: BreederFacade,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  public ngOnInit(): void {
    // set form
    this.createDefaultForm();

    // generate enums
    this.createGenderOptions();
    this.typeOfBirdOptions = this.birdFacade.createBirdTypeOptions();
    this.groupedColors = this.birdFacade.createBirdTypeColors();

    // get breeders and owners
    this.getAllBreeders();
    this.getAllOwners();

    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();
  }

  public onSubmit() {
    const request: ICreateBirdRequest = {
      ringNumber: this.birdForm.get('ringNumber').value,
      gender: this.birdForm.get('gender').value,
      birdType: this.birdForm.get('birdType').value,
      birthDate: this.birdForm.get('birthDate').value,
      color: this.birdForm.get('color').value,
      cageNumber: this.birdForm.get('cageNumber').value,
      breederId: this.birdForm.get('breederId').value,
      ownerId: this.birdForm.get('ownerId').value,
      description: this.birdForm.get('description').value,
      isDead: this.birdForm.get('isDead').value
    };

    this.birdFacade.createBird(request);
  }

  public goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private createDefaultForm(): void {
    this.birdForm = this.fb.group({
      ringNumber: ['', Validators.required],
      gender: ['', Validators.required],
      birdType: ['', Validators.required],
      birthDate: ['', Validators.required],
      color: ['', Validators.required],
      cageNumber: ['', Validators.required],
      breederId: ['', Validators.required],
      ownerId: ['', Validators.required],
      description: [''],
      isDead: [false, Validators.required]
    });
  }

  private createGenderOptions(): void {
    this.genderOptions = [
      { type: 'Pop', value: 'FEMALE' },
      { type: 'Man', value: 'MALE' }
    ];
  }

  private getAllBreeders(): void {
    this.breeders$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((breeders: IBreeder[]) => {
      // fetch breeders if null or undefined
      if (breeders === null || breeders === undefined) {
        const request: IGetBreedersRequest = {
          page: 1,
          pageSize: 100,
        };

        this.breederFacade.getAllBreedersRequest(request);
      }

      if (breeders !== null && breeders !== undefined) {
        breeders.forEach((breeder: IBreeder) => {
          const fullname = breeder.firstName + " " + breeder.lastName;
          this.breeders.push({ name: fullname, value: breeder.id });
        });
      }
    });
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
    this.birdFacade.onCreateBirdSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Vogel aangemaakt!', 'Gelukt', {
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
    this.birdFacade.onCreateBirdError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze vogel!', 'Error', {
        timeOut: 6000,
      });
    });
  }
}
