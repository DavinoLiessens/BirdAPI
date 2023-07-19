import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CoupleFacade } from 'src/app/store/entities/couple/couple.facade';
import { IBirdEggRequest } from 'src/app/types/birdEgg.types';
import { ICouple, IGetCouplesRequest, IUpdateCoupleRequest } from 'src/app/types/couple.types';
import { BirdEggCreateModal } from '../birdegg-create-modal/birdegg-create-modal';
import { BirdEggUpdateModal } from '../birdegg-update-modal/birdegg-update-modal';

@Component({
  selector: 'c-couple-detail',
  templateUrl: './couple-detail.component.html',
  styleUrls: ['./couple-detail.component.scss'],
  providers: [DialogService]
})
export class CoupleDetailComponent implements OnInit {

  // Observables
  public couple$: Observable<ICouple> = this.coupleFacade.getCouple();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.coupleFacade.getLoadingDetail();

  // local variables
  public coupleId: string;
  public coupleForm: FormGroup;
  public couple: ICouple;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private coupleFacade: CoupleFacade,
    private toastrService: ToastrService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.coupleId = this.route.snapshot.params?.id;
    this.coupleFacade.getCoupleRequest(parseInt(this.coupleId));

    this.couple$.pipe(
      takeUntil(this.destroyed$),
      debounceTime(10),
    ).subscribe((couple: ICouple) => {
      if (couple !== null && couple !== undefined) {
        // set local variable
        this.couple = couple;

        // fill in the form
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
    const request: IUpdateCoupleRequest = {
      coupleId: parseInt(this.coupleId),
      description: this.coupleForm.get('description').value,
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

  public openModal(coupleId: number) {
    // open modal and pass id
    const ref = this.dialogService.open(BirdEggCreateModal, {
      header: 'Ei toevoegen',
      width: '70%',
      height: 'auto',
      data: {
        coupleId
      }
    });
  }

  public openUpdateModal(birdEggId: number, coupleId: number) {
    const request: IBirdEggRequest = {
      coupleId,
      birdEggId
    };

    // open update modal
    var ref: DynamicDialogRef = this.dialogService.open(BirdEggUpdateModal, {
      header: 'Ei bewerken',
      width: '70%',
      height: 'auto',
      data: {
        request
      }
    });

    ref.onClose.subscribe(() => {
      this.coupleFacade.clearBirdEggDetail();
    });

  }
}
