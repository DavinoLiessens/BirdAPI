import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactFacade } from 'src/app/store/entities/contact/contact.facade';
import { ICreateContactRequest } from 'src/app/types/contact.types';
import { FormUtilsService } from 'src/app/Services/form-utils.service';
import { APP_CONFIG } from 'src/app/config/app.config';

@Component({
    selector: 'app-contact-create',
    templateUrl: './contact-create.component.html',
    styleUrls: ['./contact-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ContactCreateComponent implements OnInit, OnDestroy {
  private readonly destroyed$ = new Subject<void>();
  private readonly isLoading$ = new BehaviorSubject<boolean>(false);

  // Form and observables
  contactForm!: UntypedFormGroup;
  readonly loading$ = this.isLoading$.asObservable();

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly contactFacade: ContactFacade,
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
    this.contactForm = this.fb.group({
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
          Validators.pattern(/^[0-9+\-\s()]+$/), // Optional; basic phone number pattern
        ],
      ],
      email: ['', [Validators.email]], // Optional
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    this.isLoading$.next(true);

    const formValue = this.contactForm.value;
    const request: ICreateContactRequest = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      phoneNumber: formValue.phoneNumber,
      email: formValue.email,
    };

    this.contactFacade.createContact(request);
  }

  private markFormGroupTouched(): void {
    this.formUtils.markFormGroupTouched(this.contactForm);
  }

  goBack(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private setupSuccessHandling(): void {
    this.contactFacade
      .onCreateContactSuccess()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.success('Contact succesvol aangemaakt!', 'Gelukt', {
          timeOut: APP_CONFIG.ui.toastTimeout,
        });
        this.goBack();
      });
  }

  private setupErrorHandling(): void {
    this.contactFacade
      .onCreateContactError()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isLoading$.next(false);
        this.toastrService.error(
          'Er is een fout opgetreden bij het aanmaken van de contact. Probeer het opnieuw.',
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
