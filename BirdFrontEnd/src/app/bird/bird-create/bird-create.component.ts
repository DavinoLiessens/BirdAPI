import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { BreederFacade } from 'src/app/store/entities/breeder/breeder.facade';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { ICreateBirdRequest } from 'src/app/types/bird.types';
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
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    // set form
    this.createDefaultForm();

    // generate enums
    this.createGenderOptions();
    this.createBirdTypeOptions();
    this.createBirdTypeColors();

    // get breeders and owners
    this.getAllBreeders();
    this.getAllOwners();
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
      isDead: this.birdForm.get('isDead').value,
      isChild: this.birdForm.get('isChild').value,
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
      isDead: [false, Validators.required],
      isChild: [false, Validators.required],
      isFather: [false, Validators.required],
      isMother: [false, Validators.required]
    });
  }

  private createGenderOptions(): void {
    this.genderOptions = [
      { type: 'Pop', value: 'FEMALE' },
      { type: 'Man', value: 'MALE' }
    ];
  }

  private createBirdTypeOptions(): void {
    this.typeOfBirdOptions = [
      { type: 'Appelvink', value: 0 },
      { type: 'Barmsijs', value: 1 },
      { type: 'Distelvink', value: 2 },
      { type: 'Fischeri', value: 3 },
      { type: 'Goudvink', value: 4 },
      { type: 'Kanarie', value: 5 },
      { type: 'Roodmus', value: 6 },
      { type: 'Sijzen', value: 7 },
      { type: 'Mexicaanse roodmus', value: 8 }
    ];
  }

  private createBirdTypeColors(): void {
    this.groupedColors = [
      {
        label: 'Kanarie', value: 'kanarie',
        items: [
          { label: 'Intensief', value: 'Intensief' },
          { label: 'Schimmel', value: 'Schimmel' },
          { label: 'Wit', value: 'Wit' },
          { label: 'Agaat Wit', value: 'Agaat Wit' },
          { label: 'Agaat Geel', value: 'Agaat Geel' },
          { label: 'Agaat Groen', value: 'Agaat Groen' },
          { label: 'Agaat Rood', value: 'Agaat Rood' }
        ]
      },
      {
        label: 'Goudvink', value: 'Goudvink',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
          { label: 'Wildkleur/Bruin Pastel', value: 'Wildkleur/Bruin Pastel' },
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Bruin Pastel', value: 'Bruin Pastel' },
        ]
      },
      {
        label: 'Distelvink', value: 'Distelvink',
        items: [
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Agaat', value: 'Agaat' },
          { label: 'Agaat Bruin', value: 'Agaat Bruin' },
          { label: 'Agaat Pastel', value: 'Agaat Pastel' },
          { label: 'Isabel', value: 'Isabel' },
          { label: 'Satinet', value: 'Satinet' },
          { label: 'Eumo', value: 'Eumo' },
          { label: 'Pastel', value: 'Pastel' },
          { label: 'Bruin Pastel', value: 'Bruin Pastel' },
          { label: 'Witkop', value: 'Witkop' },
        ]
      },
      {
        label: 'Sijzen', value: 'Sijzen',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
          { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
          { label: 'Bruin', value: 'Bruin' },
          { label: 'Ivoor', value: 'Ivoor' },
          { label: 'Zwartkop', value: 'Zwartkop' }
        ]
      },
      {
        label: 'Appelvink', value: 'Appelvink',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' }
        ]
      },
      {
        label: 'Fischeri', value: 'Fischeri',
        items: [
          { label: 'Groen', value: 'Groen' },
          { label: 'Blauw', value: 'Blauw' },
          { label: 'Lutino', value: 'Lutino' },
          { label: 'Paars', value: 'Paars' },
          { label: 'Wit', value: 'Wit' }
        ]
      },
      {
        label: 'Barmsijzen', value: 'Barmsijzen',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' },
          { label: 'Wildkleur/Satinet', value: 'Wildkleur/Satinet' },
          { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
          { label: 'Satinet', value: 'Satinet' },
          { label: 'Ivoor', value: 'Ivoor' }
        ]
      },
      {
        label: 'Roodmus', value: 'Mexicaanse Roodmus',
        items: [
          { label: 'Wildkleur', value: 'Wildkleur' }
        ]
      },
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
}
