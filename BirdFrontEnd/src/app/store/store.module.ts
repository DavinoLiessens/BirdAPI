import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { Reducers } from './entities/entities.reducer';
import { MetaReducers } from './entities/entities.metareducers';

@NgModule({ declarations: [], imports: [StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppStoreModule { }
