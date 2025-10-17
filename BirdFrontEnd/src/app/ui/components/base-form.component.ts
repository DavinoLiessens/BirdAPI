import { Directive, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormUtilsService } from '../../Services/form-utils.service';
import { APP_CONFIG } from '../../config/app.config';

@Directive()
export abstract class BaseFormComponent implements OnDestroy {
  protected readonly destroyed$ = new Subject<void>();
  protected readonly isLoading$ = new BehaviorSubject<boolean>(false);

  readonly loading$ = this.isLoading$.asObservable();

  abstract form: FormGroup;

  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly toastr: ToastrService,
    protected readonly formUtils: FormUtilsService
  ) {}

  /**
   * Abstract method that subclasses must implement for form submission
   */
  abstract onSubmit(): void;

  /**
   * Abstract method that subclasses must implement for form initialization
   */
  abstract initializeForm(): void;

  /**
   * Common form validation logic
   */
  protected validateForm(): boolean {
    if (this.form.invalid) {
      this.formUtils.markFormGroupTouched(this.form);
      this.showValidationErrors();
      return false;
    }
    return true;
  }

  /**
   * Show validation errors to user
   */
  protected showValidationErrors(): void {
    this.toastr.warning(
      APP_CONFIG.messages.error.validationError,
      'Validatiefout',
      { timeOut: APP_CONFIG.ui.toastTimeout }
    );
  }

  /**
   * Set loading state
   */
  protected setLoading(loading: boolean): void {
    this.isLoading$.next(loading);
  }

  /**
   * Navigate back to previous page
   */
  goBack(): void {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  /**
   * Handle success with customizable message
   */
  protected handleSuccess(message: string, redirectUrl?: string): void {
    this.setLoading(false);
    this.toastr.success(message, 'Gelukt', {
      timeOut: APP_CONFIG.ui.toastTimeout,
    });

    if (redirectUrl) {
      this.router.navigate([redirectUrl]);
    } else {
      this.goBack();
    }
  }

  /**
   * Handle error with customizable message
   */
  protected handleError(
    message: string = APP_CONFIG.messages.error.unknownError
  ): void {
    this.setLoading(false);
    this.toastr.error(message, 'Fout', {
      timeOut: APP_CONFIG.ui.toastTimeout + 2000,
    });
  }

  /**
   * Get form control value safely
   */
  protected getControlValue<T>(controlName: string): T | null {
    return this.formUtils.getControlValue<T>(this.form, controlName);
  }

  /**
   * Check if form control has error
   */
  hasError(controlName: string, errorType: string): boolean {
    const control = this.form.get(controlName);
    return this.formUtils.hasError(control, errorType);
  }

  /**
   * Get validation error message for a control
   */
  getErrorMessage(controlName: string, fieldDisplayName: string): string {
    const control = this.form.get(controlName);
    return this.formUtils.getValidationErrorMessage(control, fieldDisplayName);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    this.isLoading$.complete();
  }
}
