import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { IGetOwnersRequest, IOwner, IUpdateOwnerRequest } from 'src/app/types/owner.types';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {

  // Observables
  public owner$: Observable<IOwner> = this.ownerFacade.getOwner();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.ownerFacade.getLoadingDetail();

  // local variables
  public ownerId: string;
  public ownerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.ownerId = this.route.snapshot.params?.id;
    this.ownerFacade.getOwnerRequest(parseInt(this.ownerId));

    this.owner$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((owner: IOwner) => {
      if (owner !== null && owner !== undefined) {
        // fill in the form
        this.ownerForm = this.fb.group({
          firstName: [owner.firstName, Validators.required],
          lastName: [owner.lastName, Validators.required],
          phoneNumber: [owner.phoneNumber, Validators.required],
          email: [owner.email, Validators.required],
        });
      }
    });
    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();

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

  private handleSuccesses(): void {
    this.ownerFacade.onUpdateOwnerSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Eigenaar gegevens aangepast!', 'Gelukt', {
        timeOut: 6000,
      });

      const request: IGetOwnersRequest = {
        page: 1,
        pageSize: 10,
      }
      this.ownerFacade.getAllOwnersRequest(request);

      this.ownerFacade.clearDetail();
      this.goBack();
    });
  }

  private handleErrors(): void {
    this.ownerFacade.onUpdateOwnerError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze eigenaar!', 'Error', {
        timeOut: 6000,
      });
    });
  }

}
