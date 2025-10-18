import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { CoupleFacade } from 'src/app/store/entities/couple/couple.facade';
import { IBird, IGetBirdsRequest } from 'src/app/types/bird.types';
import { ICreateCoupleRequest } from 'src/app/types/couple.types';
import {
  DropdownUtilsService,
  DropdownOption,
} from 'src/app/Services/dropdown-utils.service';
import { FormUtilsService } from 'src/app/Services/form-utils.service';
import { APP_CONFIG } from 'src/app/config/app.config';
import { CustomValidators } from 'src/app/validators/custom-validators';

@Component({
  selector: 'c-couple-create',
  templateUrl: './couple-create.component.html',
  styleUrls: ['./couple-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoupleCreateComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  // Observables with proper typing
  readonly birds$ = this.birdFacade.getBirds();
  readonly loading$ = this.isLoading$.asObservable();

  // Better typed dropdown options using utility service
  readonly maleBirds$: Observable<DropdownOption<number>[]>;
  readonly femaleBirds$: Observable<DropdownOption<number>[]>;

  // Form with proper typing
  coupleForm!: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly coupleFacade: CoupleFacade,
    private readonly birdFacade: BirdFacade,
    private readonly toastrService: ToastrService,
    private readonly dropdownUtils: DropdownUtilsService,
    private readonly formUtils: FormUtilsService
  ) {
    // Set up reactive streams for dropdown options using utility service
    this.maleBirds$ = this.birds$.pipe(
      filter((birds) => birds != null),
      map((birds) => this.dropdownUtils.birdsToDropdownOptions(birds, 'MALE'))
    );

    this.femaleBirds$ = this.birds$.pipe(
      filter((birds) => birds != null),
      map((birds) => this.dropdownUtils.birdsToDropdownOptions(birds, 'FEMALE'))
    );
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadBirds();
    this.setupSuccessHandling();
    this.setupErrorHandling();
  }

  private initializeForm(): void {
    this.coupleForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(APP_CONFIG.forms.validation.minNameLength),
          Validators.maxLength(APP_CONFIG.forms.validation.maxNameLength),
        ],
      ],
      startedAt: [
        new Date(),
        [
          Validators.required,
          CustomValidators.notFutureDate(),
          CustomValidators.notTooOldDate(50), // Max 50 years in past
        ],
      ],
      fatherId: ['', [Validators.required]],
      motherId: ['', [Validators.required]],
      cageNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(APP_CONFIG.forms.validation.minCageNumberLength),
          CustomValidators.cageNumber(),
        ],
      ],
      description: [
        '',
        [
          Validators.maxLength(
            APP_CONFIG.forms.validation.maxDescriptionLength
          ),
        ],
      ],
    });

    // Add cross-field validation to ensure father and mother are different
    this.coupleForm
      .get('motherId')
      ?.setValidators([
        Validators.required,
        CustomValidators.notEqual('fatherId'),
      ]);
  }

  private loadBirds(): void {
    this.isLoading$.next(true);

    const request: IGetBirdsRequest = {
      page: 1,
      pageSize: APP_CONFIG.api.maxPageSize, // Use config instead of magic number
      searchValue: '',
      gender: 'ALL',
      typeOfBird: '0',
      year: 'ALL',
    };

    this.birdFacade.getAllBirdsRequest(request);

    // Stop loading when birds are loaded
    this.birds$
      .pipe(
        filter((birds) => birds != null && birds.length > 0),
        takeUntil(this.destroyed$)
      )
      .subscribe(() => {
        this.isLoading$.next(false);
      });
  }

  onSubmit(): void {
    if (this.coupleForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading$.next(true);

    const formValue = this.coupleForm.value;
    const request: ICreateCoupleRequest = {
      name: formValue.name,
      startedAt: formValue.startedAt,
      fatherId: parseInt(formValue.fatherId, 10),
      motherId: parseInt(formValue.motherId, 10),
      cageNumber: formValue.cageNumber,
      description: formValue.description || '',
    };

    this.coupleFacade.createCouple(request);
  }

  private markFormGroupTouched(): void {
    this.formUtils.markFormGroupTouched(this.coupleForm);
  }

  private setupSuccessHandling(): void {
    this.coupleFacade
      .onCreateCoupleSuccess()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result: any) => {
        this.isLoading$.next(false);
        this.toastrService.success(
          APP_CONFIG.messages.success.coupleCreated,
          'Gelukt',
          { timeOut: APP_CONFIG.ui.toastTimeout }
        );

        const coupleId = result.response?.id;
        if (coupleId) {
          this.router.navigate([`couples/detail/${coupleId}`]);
        } else {
          this.goBack();
        }
      });
  }

  private setupErrorHandling(): void {
    this.coupleFacade
      .onCreateCoupleError()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.error(
          APP_CONFIG.messages.error.coupleCreateFailed,
          'Fout',
          { timeOut: APP_CONFIG.ui.toastTimeout + 2000 }
        );
      });
  }

  goBack(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.isLoading$.complete();
  }
}
