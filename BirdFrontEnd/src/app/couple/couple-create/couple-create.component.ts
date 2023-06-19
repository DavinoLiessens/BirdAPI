import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoupleFacade } from 'src/app/store/entities/couple/couple.facade';
import { ICouple, ICreateCoupleRequest } from 'src/app/types/couple.types';

@Component({
  selector: 'c-couple-create',
  templateUrl: './couple-create.component.html',
  styleUrls: ['./couple-create.component.scss']
})
export class CoupleCreateComponent implements OnInit {

  private destroyed$: Subject<boolean> = new Subject<boolean>();

  // local variables
  public coupleForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private coupleFacade: CoupleFacade,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {

    this.coupleForm = this.fb.group({
      name: ['', Validators.required],
      startedAt: [new Date(), Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      cageNumber: ['', Validators.required],
      description: ['']
    });

    console.log(this.coupleForm)

    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();
  }

  public onSubmit() {
    const request: ICreateCoupleRequest = {
      name: this.coupleForm.get('name').value,
      startedAt: this.coupleForm.get('startedAt').value,
      fatherId: this.coupleForm.get('fatherId').value,
      motherId: this.coupleForm.get('motherId').value,
      cageNumber: this.coupleForm.get('cageNumber').value,
      description: this.coupleForm.get('description').value,
    }

    this.coupleFacade.createCouple(request);
  }

  private handleSuccesses() {
    // go to detail after success hits
    // create couple success has coupleResponseModel!
    this.coupleFacade.onCreateCoupleSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe((model: ICouple) => {
      this.toastrService.success('Koppel aangemaakt!', 'Gelukt', {
        timeOut: 6000,
      });

      // this.coupleFacade.getCoupleRequest(model.id);
      this.router.navigate([`../${model.id}`]);
    });
  }

  private handleErrors() {
    throw new Error('Method not implemented.');
  }
}
