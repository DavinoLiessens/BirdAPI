import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoupleFacade } from 'src/app/store/entities/couple/couple.facade';
import { IBirdEgg } from 'src/app/types/birdEgg.types';
import { ICouple, IGetCouplesRequest, IUpdateCoupleRequest } from 'src/app/types/couple.types';

@Component({
  selector: 'c-couple-detail',
  templateUrl: './couple-detail.component.html',
  styleUrls: ['./couple-detail.component.scss']
})
export class CoupleDetailComponent implements OnInit {

  // Observables
  public couple$: Observable<ICouple> = this.coupleFacade.getCouple();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.coupleFacade.getLoadingDetail();

  // local variables
  public coupleId: string;
  public coupleForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private coupleFacade: CoupleFacade,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.coupleId = this.route.snapshot.params?.id;
    this.coupleFacade.getCoupleRequest(parseInt(this.coupleId));

    this.couple$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((couple: ICouple) => {
      if (couple !== null && couple !== undefined) {
        this.coupleForm = this.fb.group({
          name: [{ value: couple.name, disabled: true }],
          startedAt: [{ value: null, disabled: true }],
          father: [{ value: couple.fatherRingNumber, disabled: true }],
          mother: [{ value: couple.motherRingNumber, disabled: true }],
          cageNumber: [{ value: couple.cageNumber, disabled: true }],
          description: [couple.description]
        });

        this.coupleForm.get('startedAt').setValue(new Date(couple.startedAt).toISOString().split('T')[0]);
      }
    });
    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();

  }

  public onSubmit() {
    const birdegg: IBirdEgg = {
      id: 1,
      layedOn: new Date(),
      coupleId: parseInt(this.coupleId),
    };

    const request: IUpdateCoupleRequest = {
      coupleId: parseInt(this.coupleId),
      description: this.coupleForm.get('description').value,
      birdEggs: [birdegg]
    };

    console.log(request);
    this.coupleFacade.updateCoupleRequest(request);
  }
  public goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private handleSuccesses(): void {
    this.coupleFacade.onUpdateCoupleSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Koppel gegevens aangepast!', 'Gelukt', {
        timeOut: 6000,
      });

      const request: IGetCouplesRequest = {
        page: 1,
        pageSize: 10,
      }
      this.coupleFacade.getAllCouplesRequest(request);
      this.coupleFacade.clearDetail();

      this.goBack();
    });
  }

  private handleErrors(): void {
    this.coupleFacade.onUpdateCoupleError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van dit koppel!', 'Error', {
        timeOut: 6000,
      });
    });
  }

}
