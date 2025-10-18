import { Injectable } from '@angular/core';

export interface PerformanceMetric {
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
  metadata?: any;
}

@Injectable({
  providedIn: 'root',
})
export class PerformanceService {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private readonly isProduction = false; // Set based on environment

  /**
   * Start measuring performance for a given operation
   */
  startMeasure(name: string, metadata?: any): void {
    if (this.isProduction) return;

    this.metrics.set(name, {
      name,
      startTime: performance.now(),
      metadata,
    });
  }

  /**
   * End measuring performance for a given operation
   */
  endMeasure(name: string): number | null {
    if (this.isProduction) return null;

    const metric = this.metrics.get(name);
    if (!metric) {
      console.warn(`Performance metric '${name}' not found`);
      return null;
    }

    const endTime = performance.now();
    const duration = endTime - metric.startTime;

    metric.endTime = endTime;
    metric.duration = duration;

    console.log(`⏱️ ${name}: ${duration.toFixed(2)}ms`, metric.metadata || '');

    return duration;
  }

  /**
   * Measure the execution time of a function
   */
  measure<T>(name: string, fn: () => T, metadata?: any): T {
    if (this.isProduction) return fn();

    this.startMeasure(name, metadata);
    const result = fn();
    this.endMeasure(name);

    return result;
  }

  /**
   * Measure the execution time of an async function
   */
  async measureAsync<T>(
    name: string,
    fn: () => Promise<T>,
    metadata?: any
  ): Promise<T> {
    if (this.isProduction) return fn();

    this.startMeasure(name, metadata);
    const result = await fn();
    this.endMeasure(name);

    return result;
  }

  /**
   * Get all performance metrics
   */
  getMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Log component lifecycle performance
   */
  logComponentLifecycle(componentName: string, lifecycle: string): void {
    if (this.isProduction) return;

    console.log(
      `🔄 ${componentName}.${lifecycle} at ${performance.now().toFixed(2)}ms`
    );
  }

  /**
   * Decorator for measuring method execution time
   */
  static measureMethod(name?: string) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
      const methodName = name || `${target.constructor.name}.${propertyKey}`;

      descriptor.value = function (...args: any[]) {
        const startTime = performance.now();
        const result = originalMethod.apply(this, args);
        const duration = performance.now() - startTime;

        console.log(`⏱️ ${methodName}: ${duration.toFixed(2)}ms`);

        return result;
      };

      return descriptor;
    };
  }
}
