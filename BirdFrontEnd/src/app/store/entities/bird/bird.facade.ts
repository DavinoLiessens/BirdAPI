import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../store.interface';
import * as actions from './bird.actions';
import * as selectors from './bird.selectors';

@Injectable()
export class BirdFacade {
    constructor(
        private store: Store<IAppState>,
    ) { }

    // Selectors

    // Actions

    // ActionSubjects
    
}
