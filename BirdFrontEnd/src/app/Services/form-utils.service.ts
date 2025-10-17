import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormUtilsService {
  /**
   * Marks all controls in a form group as touched to trigger validation display
   */
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control) {
        control.markAsTouched();

        // If it's a nested form group, recursively mark touched
        if (control instanceof FormGroup) {
          this.markFormGroupTouched(control);
        }
      }
    });
  }

  /**
   * Gets validation error message for a form control
   */
  getValidationErrorMessage(
    control: AbstractControl | null,
    fieldName: string
  ): string {
    if (!control || !control.errors || !control.touched) {
      return '';
    }

    const errors = control.errors;

    if (errors['required']) {
      return `${fieldName} is verplicht`;
    }

    if (errors['minlength']) {
      const requiredLength = errors['minlength'].requiredLength;
      return `${fieldName} moet minimaal ${requiredLength} karakters bevatten`;
    }

    if (errors['maxlength']) {
      const requiredLength = errors['maxlength'].requiredLength;
      return `${fieldName} mag maximaal ${requiredLength} karakters bevatten`;
    }

    if (errors['email']) {
      return `${fieldName} moet een geldig email adres zijn`;
    }

    if (errors['pattern']) {
      return `${fieldName} heeft een ongeldig formaat`;
    }

    if (errors['min']) {
      const min = errors['min'].min;
      return `${fieldName} moet minimaal ${min} zijn`;
    }

    if (errors['max']) {
      const max = errors['max'].max;
      return `${fieldName} mag maximaal ${max} zijn`;
    }

    return `${fieldName} is ongeldig`;
  }

  /**
   * Resets a form and clears all validation states
   */
  resetForm(formGroup: FormGroup): void {
    formGroup.reset();
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control) {
        control.setErrors(null);
        control.markAsUntouched();
        control.markAsPristine();
      }
    });
  }

  /**
   * Checks if a form control has a specific error and is touched
   */
  hasError(control: AbstractControl | null, errorType: string): boolean {
    return !!(
      control &&
      control.errors &&
      control.errors[errorType] &&
      control.touched
    );
  }

  /**
   * Gets the value from a form control safely
   */
  getControlValue<T>(formGroup: FormGroup, controlName: string): T | null {
    const control = formGroup.get(controlName);
    return control ? control.value : null;
  }
}
