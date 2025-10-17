import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectItemGroup } from 'primeng/api/selectitemgroup';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { BreederFacade } from 'src/app/store/entities/breeder/breeder.facade';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { ICreateBirdRequest } from 'src/app/types/bird.types';
import { IBreeder, IGetBreedersRequest } from 'src/app/types/breeder.types';
import { IBirdTypeOption, IGenderOption } from 'src/app/types/dropdown.types';
import { IGetOwnersRequest, IOwner } from 'src/app/types/owner.types';
import {
  DropdownUtilsService,
  DropdownOption,
} from 'src/app/Services/dropdown-utils.service';
import { FormUtilsService } from 'src/app/Services/form-utils.service';
import { APP_CONFIG } from 'src/app/config/app.config';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'c-bird-create',
  templateUrl: './bird-create.component.html',
  styleUrls: ['./bird-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BirdCreateComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  // Form
  birdForm!: FormGroup;

  // Observables with proper typing
  readonly loading$ = this.isLoading$.asObservable();
  readonly genderOptions: IGenderOption[] = [
    { type: 'Pop', value: 'FEMALE' },
    { type: 'Man', value: 'MALE' },
  ];
  readonly typeOfBirdOptions: IBirdTypeOption[] =
    this.birdFacade.createBirdTypeOptions();
  readonly groupedColors: SelectItemGroup[] =
    this.birdFacade.createBirdTypeColors();

  // Reactive dropdown options
  readonly breeders$: Observable<DropdownOption<number>[]>;
  readonly owners$: Observable<DropdownOption<number>[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly birdFacade: BirdFacade,
    private readonly breederFacade: BreederFacade,
    private readonly ownerFacade: OwnerFacade,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastrService: ToastrService,
    private readonly dropdownUtils: DropdownUtilsService,
    private readonly formUtils: FormUtilsService
  ) {
    // Set up reactive streams for dropdown options
    this.breeders$ = this.breederFacade.getBreeders().pipe(
      filter((breeders) => breeders != null),
      map((breeders) => this.mapBreedersToDropdownOptions(breeders))
    );

    this.owners$ = this.ownerFacade.getOwners().pipe(
      filter((owners) => owners != null),
      map((owners) => this.mapOwnersToDropdownOptions(owners))
    );
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadData();
    this.setupSuccessHandling();
    this.setupErrorHandling();
  }

  private initializeForm(): void {
    this.birdForm = this.fb.group({
      ringNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(APP_CONFIG.forms.validation.minNameLength),
          CustomValidators.ringNumber(),
        ],
      ],
      gender: ['', Validators.required],
      birdType: ['', Validators.required],
      birthDate: [
        '',
        [
          Validators.required,
          CustomValidators.notFutureDate(),
          CustomValidators.notTooOldDate(20), // Max 20 years old for birds
        ],
      ],
      color: ['', Validators.required],
      cageNumber: ['', [Validators.required, CustomValidators.cageNumber()]],
      breederId: ['', Validators.required],
      ownerId: ['', Validators.required],
      description: [
        '',
        Validators.maxLength(APP_CONFIG.forms.validation.maxDescriptionLength),
      ],
      isDead: [false, Validators.required],
    });
  }

  private loadData(): void {
    this.isLoading$.next(true);
    this.loadBreeders();
    this.loadOwners();
  }

  private loadBreeders(): void {
    const request: IGetBreedersRequest = {
      page: 1,
      pageSize: APP_CONFIG.api.maxPageSize,
    };
    this.breederFacade.getAllBreedersRequest(request);
  }

  private loadOwners(): void {
    const request: IGetOwnersRequest = {
      page: 1,
      pageSize: APP_CONFIG.api.maxPageSize,
    };
    this.ownerFacade.getAllOwnersRequest(request);
  }

  private mapBreedersToDropdownOptions(
    breeders: IBreeder[]
  ): DropdownOption<number>[] {
    return breeders
      .map((breeder) => ({
        label: `${breeder.firstName} ${breeder.lastName}`,
        value: breeder.id,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  private mapOwnersToDropdownOptions(
    owners: IOwner[]
  ): DropdownOption<number>[] {
    return owners
      .map((owner) => ({
        label: `${owner.firstName} ${owner.lastName}`,
        value: owner.id,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  onSubmit(): void {
    if (this.birdForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading$.next(true);

    const formValue = this.birdForm.value;
    const request: ICreateBirdRequest = {
      ringNumber: formValue.ringNumber,
      gender: formValue.gender,
      birdType: formValue.birdType,
      birthDate: formValue.birthDate,
      color: formValue.color,
      cageNumber: formValue.cageNumber,
      breederId: parseInt(formValue.breederId, 10),
      ownerId: parseInt(formValue.ownerId, 10),
      description: formValue.description || '',
      isDead: formValue.isDead || false,
    };

    this.birdFacade.createBird(request);
  }

  private markFormGroupTouched(): void {
    this.formUtils.markFormGroupTouched(this.birdForm);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private setupSuccessHandling(): void {
    this.birdFacade
      .onCreateBirdSuccess()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.success(
          APP_CONFIG.messages.success.birdCreated,
          'Gelukt',
          { timeOut: APP_CONFIG.ui.toastTimeout }
        );
        this.goBack();
      });
  }

  private setupErrorHandling(): void {
    this.birdFacade
      .onCreateBirdError()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.error(
          APP_CONFIG.messages.error.birdCreateFailed,
          'Fout',
          { timeOut: APP_CONFIG.ui.toastTimeout + 2000 }
        );
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.isLoading$.complete();
  }
}
