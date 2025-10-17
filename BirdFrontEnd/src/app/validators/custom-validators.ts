import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  /**
   * Validator for ring numbers (should be alphanumeric)
   */
  static ringNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // Don't validate empty values
      }

      const ringNumberPattern = /^[A-Za-z0-9-]+$/;
      const valid = ringNumberPattern.test(control.value);

      return valid ? null : { ringNumber: { value: control.value } };
    };
  }

  /**
   * Validator for cage numbers (should be numeric or alphanumeric)
   */
  static cageNumber(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const cageNumberPattern = /^[A-Za-z0-9-]+$/;
      const valid = cageNumberPattern.test(control.value);

      return valid ? null : { cageNumber: { value: control.value } };
    };
  }

  /**
   * Validator to ensure date is not in the future
   */
  static notFutureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const inputDate = new Date(control.value);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // End of today

      return inputDate <= today
        ? null
        : { futureDate: { value: control.value } };
    };
  }

  /**
   * Validator to ensure date is not too far in the past
   */
  static notTooOldDate(maxYearsInPast: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const inputDate = new Date(control.value);
      const maxPastDate = new Date();
      maxPastDate.setFullYear(maxPastDate.getFullYear() - maxYearsInPast);

      return inputDate >= maxPastDate
        ? null
        : {
            tooOldDate: {
              value: control.value,
              maxYearsInPast,
            },
          };
    };
  }

  /**
   * Validator to ensure two form controls don't have the same value
   */
  static notEqual(otherControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null;
      }

      const otherControl = control.parent.get(otherControlName);
      if (!otherControl) {
        return null;
      }

      return control.value !== otherControl.value
        ? null
        : {
            notEqual: {
              value: control.value,
              otherControlName,
            },
          };
    };
  }

  /**
   * Validator for minimum age (useful for bird birth dates)
   */
  static minimumAge(minAgeInDays: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const inputDate = new Date(control.value);
      const minDate = new Date();
      minDate.setDate(minDate.getDate() - minAgeInDays);

      return inputDate <= minDate
        ? null
        : {
            minimumAge: {
              value: control.value,
              minAgeInDays,
            },
          };
    };
  }

  /**
   * Validator to ensure a value is unique within a list
   */
  static unique(existingValues: any[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || !existingValues) {
        return null;
      }

      const isDuplicate = existingValues.includes(control.value);

      return !isDuplicate
        ? null
        : {
            unique: {
              value: control.value,
            },
          };
    };
  }

  /**
   * Async validator example for checking if a ring number exists
   */
  static asyncUniqueRingNumber(service: any): ValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      if (!control.value) {
        return Promise.resolve(null);
      }

      return service
        .checkRingNumberExists(control.value)
        .toPromise()
        .then((exists: boolean) => {
          return exists ? { ringNumberExists: { value: control.value } } : null;
        })
        .catch(() => null); // In case of error, don't fail validation
    };
  }
}
