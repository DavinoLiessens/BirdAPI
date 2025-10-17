import { Injectable } from '@angular/core';
import { IBird } from '../types/bird.types';

export interface DropdownOption<T = any> {
  label: string;
  value: T;
  disabled?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DropdownUtilsService {
  /**
   * Transforms birds to dropdown options filtered by gender
   */
  birdsToDropdownOptions(
    birds: IBird[],
    gender?: 'MALE' | 'FEMALE'
  ): DropdownOption<number>[] {
    if (!birds) return [];

    return birds
      .filter((bird) => {
        const isAlive = !bird.isDead;
        const hasCorrectGender = !gender || bird.gender === gender;
        return isAlive && hasCorrectGender;
      })
      .map((bird) => ({
        label: bird.ringNumber,
        value: bird.id,
        disabled: bird.isDead,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  /**
   * Generic transform function for any array to dropdown options
   */
  arrayToDropdownOptions<T>(
    items: T[],
    labelKey: keyof T,
    valueKey: keyof T,
    filterFn?: (item: T) => boolean,
    sortFn?: (
      a: DropdownOption<T[keyof T]>,
      b: DropdownOption<T[keyof T]>
    ) => number
  ): DropdownOption<T[keyof T]>[] {
    if (!items) return [];

    let filteredItems = filterFn ? items.filter(filterFn) : items;

    const options = filteredItems.map((item) => ({
      label: String(item[labelKey]),
      value: item[valueKey],
    }));

    return sortFn ? options.sort(sortFn) : options;
  }

  /**
   * Finds an option by value
   */
  findOptionByValue<T>(
    options: DropdownOption<T>[],
    value: T
  ): DropdownOption<T> | undefined {
    return options.find((option) => option.value === value);
  }

  /**
   * Filters options by search term
   */
  filterOptions<T>(
    options: DropdownOption<T>[],
    searchTerm: string
  ): DropdownOption<T>[] {
    if (!searchTerm.trim()) return options;

    const term = searchTerm.toLowerCase();
    return options.filter((option) =>
      option.label.toLowerCase().includes(term)
    );
  }

  /**
   * Groups options by a grouping function
   */
  groupOptions<T>(
    options: DropdownOption<T>[],
    groupFn: (option: DropdownOption<T>) => string
  ): { [group: string]: DropdownOption<T>[] } {
    return options.reduce((groups, option) => {
      const group = groupFn(option);
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(option);
      return groups;
    }, {} as { [group: string]: DropdownOption<T>[] });
  }
}
