import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBird, IBirdDetail, ICreateBirdRequest, IGetBirdsRequest, IUpdateBirdRequest } from 'src/app/types/bird.types';
import { IPagination } from 'src/app/types/pagination.types';
import { IAppState } from '../../store.interface';
import * as actions from './bird.actions';
import * as selectors from './bird.selectors';
import { SelectItemGroup } from 'primeng/api';
import { IBirdTypeOption, IGenderOption } from 'src/app/types/dropdown.types';

@Injectable()
export class BirdFacade {
    constructor(
        private store: Store<IAppState>,
        private action$: ActionsSubject
    ) { }

    // Selectors
    public getBirds(): Observable<IBird[]> {
        return this.store.select(selectors.selectBirds);
    }

    public getBird(): Observable<IBirdDetail> {
        return this.store.select(selectors.selectBird);
    }

    public getPagination(): Observable<IPagination> {
        return this.store.select(selectors.selectPagination);
    }

    public getLoading(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingAll);
    }

    public getLoadingDetail(): Observable<boolean> {
        return this.store.select(selectors.selectLoadingDetail);
    }

    public clearDetail(): void {
        this.store.dispatch(actions.clearBirdDetail());
    }

    // Actions
    public getAllBirdsRequest(request: IGetBirdsRequest): void {
        this.store.dispatch(actions.getBirds({ request }));
    }

    public getBirdRequest(birdId: number): void {
        this.store.dispatch(actions.getBird({ birdId }));
    }

    public createBird(request: ICreateBirdRequest): void {
        this.store.dispatch(actions.createBird({ request }));
    }

    public updateBirdRequest(request: IUpdateBirdRequest): void {
        this.store.dispatch(actions.updateBird({ request }));
    }

    // ActionSubjects
    public onCreateBirdSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBirdSuccess.type));
    }

    public onCreateBirdError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.createBirdError.type));
    }

    public onUpdateBirdSuccess(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdSuccess.type));
    }

    public onUpdateBirdError(): Observable<ActionsSubject> {
        return this.action$.pipe(ofType(actions.updateBirdError.type));
    }

    // Static objects
    public createBirdTypeColors(): SelectItemGroup[] {
        let colors = [
          {
            label: 'Kanarie', value: 'kanarie',
            items: [
              { label: 'Intensief', value: 'Intensief' },
              { label: 'Schimmel', value: 'Schimmel' },
              { label: 'Wit', value: 'Wit' },
              { label: 'Agaat Wit', value: 'Agaat Wit' },
              { label: 'Agaat Geel', value: 'Agaat Geel' },
              { label: 'Agaat Groen', value: 'Agaat Groen' },
              { label: 'Agaat Rood', value: 'Agaat Rood' }
            ]
          },
          {
            label: 'Goudvink', value: 'Goudvink',
            items: [
              { label: 'Wildkleur', value: 'Wildkleur' },
              { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
              { label: 'Wildkleur/Bruin Pastel', value: 'Wildkleur/Bruin Pastel' },
              { label: 'Bruin', value: 'Bruin' },
              { label: 'Bruin Pastel', value: 'Bruin Pastel' },
            ]
          },
          {
            label: 'Distelvink', value: 'Distelvink',
            items: [
              { label: 'Bruin', value: 'Bruin' },
              { label: 'Agaat', value: 'Agaat' },
              { label: 'Agaat Bruin', value: 'Agaat Bruin' },
              { label: 'Agaat Pastel', value: 'Agaat Pastel' },
              { label: 'Isabel', value: 'Isabel' },
              { label: 'Satinet', value: 'Satinet' },
              { label: 'Eumo', value: 'Eumo' },
              { label: 'Pastel', value: 'Pastel' },
              { label: 'Bruin Pastel', value: 'Bruin Pastel' },
              { label: 'Witkop', value: 'Witkop' },
            ]
          },
          {
            label: 'Sijzen', value: 'Sijzen',
            items: [
              { label: 'Wildkleur', value: 'Wildkleur' },
              { label: 'Wildkleur/Bruin', value: 'Wildkleur/Bruin' },
              { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
              { label: 'Bruin', value: 'Bruin' },
              { label: 'Ivoor', value: 'Ivoor' },
              { label: 'Zwartkop', value: 'Zwartkop' }
            ]
          },
          {
            label: 'Appelvink', value: 'Appelvink',
            items: [
              { label: 'Wildkleur', value: 'Wildkleur' }
            ]
          },
          {
            label: 'Fischeri', value: 'Fischeri',
            items: [
              { label: 'Groen', value: 'Groen' },
              { label: 'Blauw', value: 'Blauw' },
              { label: 'Lutino', value: 'Lutino' },
              { label: 'Paars', value: 'Paars' },
              { label: 'Wit', value: 'Wit' }
            ]
          },
          {
            label: 'Barmsijzen', value: 'Barmsijzen',
            items: [
              { label: 'Wildkleur', value: 'Wildkleur' },
              { label: 'Wildkleur/Satinet', value: 'Wildkleur/Satinet' },
              { label: 'Wildkleur/Ivoor', value: 'Wildkleur/Ivoor' },
              { label: 'Satinet', value: 'Satinet' },
              { label: 'Ivoor', value: 'Ivoor' }
            ]
          },
          {
            label: 'Roodmus', value: 'Mexicaanse Roodmus',
            items: [
              { label: 'Wildkleur', value: 'Wildkleur' }
            ]
          },
        ];
        return colors;
    }

    public createBirdTypeOptions(): IBirdTypeOption[] {
        let options = [
            { type: 'Appelvink', value: 0 },
            { type: 'Barmsijs', value: 1 },
            { type: 'Distelvink', value: 2 },
            { type: 'Fischeri', value: 3 },
            { type: 'Goudvink', value: 4 },
            { type: 'Kanarie', value: 5 },
            { type: 'Roodmus', value: 6 },
            { type: 'Sijzen', value: 7 },
            { type: 'Mexicaanse roodmus', value: 8 }
        ];

        return options;
    }

    public createGenderOptions(): IGenderOption[] {
        let genders = [
            { type: 'Pop', value: 'FEMALE' },
            { type: 'Man', value: 'MALE' }
        ];

        return genders;
    }
}
