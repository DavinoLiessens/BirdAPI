import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoupleFacade } from '../store/entities/couple/couple.facade';
import { ICouple, IGetCouplesRequest } from '../types/couple.types';
import { IPagination } from '../types/pagination.types';

@Component({
  selector: 'c-couple-overview',
  templateUrl: './couple.component.html',
  styleUrls: ['./couple.component.scss']
})
export class CoupleComponent implements OnInit {
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public couples$: Observable<ICouple[]> = this.coupleFacade.getCouples();
  public pagination$: Observable<IPagination> = this.coupleFacade.getPagination();
  public loading$: Observable<boolean> = this.coupleFacade.getLoading();

  // local variables
  public couples: ICouple[];

  constructor(private coupleFacade: CoupleFacade) { }

  ngOnInit(): void {
    // get all couples
    this.couples$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((couples: ICouple[]) => {
      if (couples === null || couples === undefined) {
        const request: IGetCouplesRequest = {
          page: 1,
          pageSize: 10,
        };
        this.coupleFacade.getAllCouplesRequest(request);
      }

      if (couples !== null && couples !== undefined) {
        this.couples = couples;
      }
    });
  }

  public DeleteCouple(id: number): void {
    console.log("deleting couple with id", id);
  }

}
