import { createFeatureSelector } from '@ngrx/store';
export const FEATURE_KEY = 'coreModule';

export interface IFeatureState {
    bird: any;
    breeder: any;
    owner: any;
    couple: any;
}

export const selectFeature = createFeatureSelector<IFeatureState>(FEATURE_KEY);
