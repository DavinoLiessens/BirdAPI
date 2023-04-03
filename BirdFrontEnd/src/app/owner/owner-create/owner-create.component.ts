import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';
import { IGetOwnersRequest } from 'src/app/types/owner.types';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

  // local variables
  public ownerForm: FormGroup;
  private destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    // fill in the form
    this.ownerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });

    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();

  }

  public onSubmit() {
    const request: any = {
      firstName: this.ownerForm.get('firstName').value,
      lastName: this.ownerForm.get('lastName').value,
      phoneNumber: this.ownerForm.get('phoneNumber').value,
      email: this.ownerForm.get('email').value
    };

    this.ownerFacade.createOwner(request);

  }

  public goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private handleSuccesses(): void {
    this.ownerFacade.onCreateOwnerSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Eigenaar aangemaakt!', 'Gelukt', {
        timeOut: 6000,
      });

      const request: IGetOwnersRequest = {
        page: 1,
        pageSize: 10,
      }
      this.ownerFacade.getAllOwnersRequest(request);

      this.goBack();
    });
  }

  private handleErrors(): void {
    this.ownerFacade.onCreateOwnerError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanmaken van deze eigenaar!', 'Error', {
        timeOut: 6000,
      });
    });
  }

}
