import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SelectItemGroup } from 'primeng/api';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { ContactFacade } from 'src/app/store/entities/contact/contact.facade';
import { ICreateBirdRequest } from 'src/app/types/bird.types';
import { IBirdTypeOption, IGenderOption } from 'src/app/types/dropdown.types';
import { IContact } from 'src/app/types/contact.types';
import {
  DropdownUtilsService,
  DropdownOption,
} from 'src/app/Services/dropdown-utils.service';
import { FormUtilsService } from 'src/app/Services/form-utils.service';
import { APP_CONFIG } from 'src/app/config/app.config';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { toDateOnly } from 'src/app/utils/date.utils';

@Component({
    selector: 'c-bird-create',
    templateUrl: './bird-create.component.html',
    styleUrls: ['./bird-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class BirdCreateComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  // Form
  birdForm!: UntypedFormGroup;

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

  // Breeder and owner both come from the contact list of the kwekerij
  readonly breeders$: Observable<DropdownOption<number>[]>;
  readonly owners$: Observable<DropdownOption<number>[]>;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly birdFacade: BirdFacade,
    private readonly contactFacade: ContactFacade,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastrService: ToastrService,
    private readonly dropdownUtils: DropdownUtilsService,
    private readonly formUtils: FormUtilsService
  ) {
    const contactOptions$ = this.contactFacade.getContacts().pipe(
      filter((contacts) => contacts != null),
      map((contacts) => this.mapContactsToDropdownOptions(contacts))
    );
    this.breeders$ = contactOptions$;
    this.owners$ = contactOptions$;
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
    this.contactFacade.getAllContactsRequest({
      page: 1,
      pageSize: APP_CONFIG.api.maxPageSize,
    });

    // Once the contacts are in: stop loading and preselect the kwekerij itself
    // as breeder and owner (the usual case for a bird bred here)
    this.contactFacade
      .getContacts()
      .pipe(
        filter((contacts) => contacts != null),
        take(1),
        takeUntil(this.destroyed$)
      )
      .subscribe((contacts) => {
        const self = contacts.find((c) => c.isSelf);
        if (self) {
          if (!this.birdForm.get('breederId').value) this.birdForm.get('breederId').setValue(self.id);
          if (!this.birdForm.get('ownerId').value) this.birdForm.get('ownerId').setValue(self.id);
        }
        this.isLoading$.next(false);
      });
  }

  private mapContactsToDropdownOptions(contacts: IContact[]): DropdownOption<number>[] {
    return [...contacts]
      .sort((a, b) => Number(b.isSelf) - Number(a.isSelf) ||
        `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`))
      .map((contact) => ({
        label: contact.isSelf
          ? `${contact.firstName} ${contact.lastName} (mijn kwekerij)`
          : `${contact.firstName} ${contact.lastName}`,
        value: contact.id,
      }));
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
      birthDate: toDateOnly(formValue.birthDate),
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
