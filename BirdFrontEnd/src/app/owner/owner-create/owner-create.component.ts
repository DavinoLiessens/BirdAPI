import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerFacade } from 'src/app/store/entities/owner/owner.facade';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.scss']
})
export class OwnerCreateComponent implements OnInit {

  // local variables
  public ownerForm: FormGroup;

  constructor(private fb: FormBuilder,
    private ownerFacade: OwnerFacade,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // fill in the form
    this.ownerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
    });
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
}
