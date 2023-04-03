import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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

  // local variables
  public birds: IBird[];

  constructor(private birdFacade: BirdFacade) { }

  ngOnInit() {
    // get all birds
    this.birds$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((birds: IBird[]) => {
      if (birds === null || birds === undefined) {
        const request: IGetBirdsRequest = {
          page: 1,
          pageSize: 10,
        }
        this.birdFacade.getAllBirdsRequest(request);
      }

      if (birds !== null || birds === undefined) {
        this.birds = birds;
      }
    });
  }

  public DeleteBird(id: number): void {
    console.log("deleting bird with id", id);
  }
}
