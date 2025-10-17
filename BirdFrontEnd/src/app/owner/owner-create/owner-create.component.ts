import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { ICreateOwnerRequest } from 'src/app/types/owner.types';
import { FormUtilsService } from 'src/app/Services/form-utils.service';
import { APP_CONFIG } from 'src/app/config/app.config';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnerCreateComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  // Form and observables
  ownerForm!: FormGroup;
  readonly loading$ = this.isLoading$.asObservable();

  constructor(
    private readonly fb: FormBuilder,
    private readonly ownerFacade: OwnerFacade,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastrService: ToastrService,
    private readonly formUtils: FormUtilsService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.setupSuccessHandling();
    this.setupErrorHandling();
  }

  private initializeForm(): void {
    this.ownerForm = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(APP_CONFIG.forms.validation.minNameLength),
          Validators.maxLength(APP_CONFIG.forms.validation.maxNameLength),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(APP_CONFIG.forms.validation.minNameLength),
          Validators.maxLength(APP_CONFIG.forms.validation.maxNameLength),
        ],
      ],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9+\-\s()]+$/), // Basic phone number pattern
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.ownerForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading$.next(true);

    const formValue = this.ownerForm.value;
    const request: ICreateOwnerRequest = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      phoneNumber: formValue.phoneNumber,
      email: formValue.email,
    };

    this.ownerFacade.createOwner(request);
  }

  private markFormGroupTouched(): void {
    this.formUtils.markFormGroupTouched(this.ownerForm);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private setupSuccessHandling(): void {
    this.ownerFacade
      .onCreateOwnerSuccess()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.success('Eigenaar succesvol aangemaakt!', 'Gelukt', {
          timeOut: APP_CONFIG.ui.toastTimeout,
        });
        this.goBack();
      });
  }

  private setupErrorHandling(): void {
    this.ownerFacade
      .onCreateOwnerError()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.error(
          'Er is een fout opgetreden bij het aanmaken van de eigenaar. Probeer het opnieuw.',
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
