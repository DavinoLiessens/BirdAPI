import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="loading-container" *ngIf="show">
      <div class="loading-content">
        <p-progressSpinner
          [style]="spinnerStyle"
          [strokeWidth]="strokeWidth"
          [animationDuration]="animationDuration"
        >
        </p-progressSpinner>
        <p class="loading-text" *ngIf="text">{{ text }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
      }

      .loading-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
      }

      .loading-text {
        margin: 0;
        color: var(--text-color-secondary, #6c757d);
        font-size: 0.875rem;
      }

      .loading-container.overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.8);
        z-index: 1000;
      }

      .loading-container.fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 9999;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
  @Input() show = false;
  @Input() text = '';
  @Input() type: 'inline' | 'overlay' | 'fullscreen' = 'inline';
  @Input() spinnerStyle = { width: '40px', height: '40px' };
  @Input() strokeWidth = '4';
  @Input() animationDuration = '1s';

  get containerClass(): string {
    return `loading-container ${this.type}`;
  }
}
