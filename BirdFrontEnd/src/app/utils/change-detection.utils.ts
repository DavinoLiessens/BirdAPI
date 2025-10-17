import { ChangeDetectorRef } from '@angular/core';

/**
 * Utility class for optimized change detection patterns
 */
export class ChangeDetectionUtils {
  /**
   * Manually trigger change detection in OnPush components
   */
  static detectChanges(cdr: ChangeDetectorRef): void {
    if (!cdr['destroyed']) {
      cdr.detectChanges();
    }
  }

  /**
   * Mark component for check in OnPush components
   */
  static markForCheck(cdr: ChangeDetectorRef): void {
    if (!cdr['destroyed']) {
      cdr.markForCheck();
    }
  }

  /**
   * Detach change detection (useful for performance-critical scenarios)
   */
  static detach(cdr: ChangeDetectorRef): void {
    cdr.detach();
  }

  /**
   * Reattach change detection
   */
  static reattach(cdr: ChangeDetectorRef): void {
    cdr.reattach();
  }
}

/**
 * Decorator for automatic change detection in OnPush components
 * Usage: @AutoDetectChanges() method() { ... }
 */
export function AutoDetectChanges() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);

      // Try to access cdr from component
      if (this.cdr) {
        ChangeDetectionUtils.markForCheck(this.cdr);
      }

      return result;
    };

    return descriptor;
  };
}
