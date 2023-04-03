import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { IOwner, IUpdateOwnerRequest } from 'src/app/types/owner.types';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {

  // Observables
  public owner$: Observable<IOwner> = this.ownerFacade.getOwner();
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  // local variables
  public ownerId: string;
  public ownerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.ownerId = this.route.snapshot.params?.id;

    this.owner$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owner: IOwner) => {
      if (owner === null || owner === undefined) {
        this.ownerFacade.getOwnerRequest(parseInt(this.ownerId));
      }
      else {
        // fill in the form
        this.ownerForm = this.fb.group({
          firstName: [owner.firstName, Validators.required],
          lastName: [owner.lastName, Validators.required],
          phoneNumber: [owner.phoneNumber, Validators.required],
          email: [owner.email, Validators.required],
        });
      }
    });
  }

  public onSubmit() {
    const request: IUpdateOwnerRequest = {
      id: parseInt(this.ownerId),
      firstName: this.ownerForm.get('firstName').value,
      lastName: this.ownerForm.get('lastName').value,
      phoneNumber: this.ownerForm.get('phoneNumber').value,
      email: this.ownerForm.get('email').value,
    };

    this.ownerFacade.updateOwnerRequest(request);
  }

  public goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
