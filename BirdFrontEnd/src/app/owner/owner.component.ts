import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OwnerService } from '../Services/owner.service';
import { IOwner } from '../types/owner.types';
import { IPagination } from '../types/pagination.types';

@Component({
  selector: 'c-owner-overview',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  // Observables
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public owners$: Observable<IOwner[]>;
  public pagination$: Observable<IPagination>;

  // local variables
  public owners: IOwner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    
  }

  public deleteOwner(id: number){
    console.log("Deleting owner with id: ", id);
  }
}
