import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { Effects } from './entities.effects';
import { Facades } from './entities.facade';
import { Reducers } from './entities.reducer';
import { MetaReducers } from './entities.metareducers';
import { FEATURE_KEY } from './store.config';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(FEATURE_KEY, Reducers, MetaReducers),
    EffectsModule.forFeature(Effects)
  ],
  providers: [
    Facades
  ],
})
export class CoreStoreModule { }
