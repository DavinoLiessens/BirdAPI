import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { BirdFacade } from '../store/entities/bird/bird.facade';
import { IBird, IGetBirdsRequest } from '../types/bird.types';
import { IPagination } from '../types/pagination.types';

@Component({
  selector: 'c-bird-overview',
  templateUrl: './bird.component.html',
  styleUrls: ['./bird.component.scss']
})
export class BirdComponent implements OnInit {

  // Observables
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public birds$: Observable<IBird[]> = this.birdFacade.getBirds();
  public pagination$: Observable<IPagination> = this.birdFacade.getPagination();
  public loading$: Observable<boolean> = this.birdFacade.getLoading();
  public search$: Subject<string> = new Subject<string>();

  // local variables
  public birds: IBird[];

  constructor(private birdFacade: BirdFacade) { }

  ngOnInit() {
    // get all birds
    this.birds$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((birds: IBird[]) => {
      if (birds === null || birds === undefined) {
        this.GetAllBirds();
      }

      if (birds !== null || birds !== undefined) {
        this.birds = birds;
      }
    });

    this.search$.pipe(
      takeUntil(this.destroyed$),
      debounceTime(500)
    ).subscribe((searchValue: string) => {
      if (searchValue !== null && searchValue !== undefined && searchValue !== "") {
        const search = searchValue.toLowerCase();
        this.birds = this.birds.filter(b => b.breeder.firstName.toLowerCase().includes(search) ||
                               b.breeder.lastName.toLowerCase().includes(search) ||
                               b.ringNumber.toLowerCase().includes(search) || 
                               b.cageNumber.toLowerCase() === search);
      }
      else {
        this.GetAllBirds();
      }
    });
  }

  public onSearch(searchTerm: string){
    this.search$.next(searchTerm);
  }

  public DeleteBird(id: number): void {
    console.log("deleting bird with id", id);
  }

  private GetAllBirds(): void {
    const request: IGetBirdsRequest = {
      page: 1,
      pageSize: 10
    };
    this.birdFacade.getAllBirdsRequest(request);
  }
}
