import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BirdFacade } from 'src/app/store/entities/bird/bird.facade';
import { CoupleFacade } from 'src/app/store/entities/couple/couple.facade';
import { IBird, IGetBirdsRequest } from 'src/app/types/bird.types';
import { ICouple, ICreateCoupleRequest, ICreatedCoupleResponseModel } from 'src/app/types/couple.types';
import { IPagination } from 'src/app/types/pagination.types';

@Component({
  selector: 'c-couple-create',
  templateUrl: './couple-create.component.html',
  styleUrls: ['./couple-create.component.scss']
})
export class CoupleCreateComponent implements OnInit, OnDestroy {

  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public birds$: Observable<IBird[]> = this.birdFacade.getBirds();
  public birdPagination$: Observable<IPagination> = this.birdFacade.getPagination();

  // local variables
  public coupleForm: FormGroup;
  public maleBirds: any[] = [];
  public femaleBirds: any[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private coupleFacade: CoupleFacade,
    private birdFacade: BirdFacade,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.coupleForm = this.fb.group({
      name: ['', Validators.required],
      startedAt: [new Date(), Validators.required],
      fatherId: ['', Validators.required],
      motherId: ['', Validators.required],
      cageNumber: ['', Validators.required],
      description: ['']
    });

    const request: IGetBirdsRequest = {
      page: 1,
      pageSize: 10
    };

    this.birdFacade.getAllBirdsRequest(request);

    this.handleBirdsList();

    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();
  }

  public onSubmit() {
    const request: ICreateCoupleRequest = {
      name: this.coupleForm.get('name').value,
      startedAt: this.coupleForm.get('startedAt').value,
      fatherId: parseInt(this.coupleForm.get('fatherId').value),
      motherId: parseInt(this.coupleForm.get('motherId').value),
      cageNumber: this.coupleForm.get('cageNumber').value,
      description: this.coupleForm.get('description').value,
    };

    this.coupleFacade.createCouple(request);
  }

  private handleSuccesses(): void {
    // go to detail after success hits
    // create couple success has coupleResponseModel!
    this.coupleFacade.onCreateCoupleSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe((result: any) => {
      this.toastrService.success('Koppel aangemaakt!', 'Gelukt', {
        timeOut: 6000,
      });
      const model = result.response;

      this.router.navigate([`couples/detail/${model.id}`]);
    });
  }

  private handleErrors(): void {
    this.coupleFacade.onCreateCoupleError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps er liep iets mis tijdens het aanmaken van dit koppel!', 'Error', {
        timeOut: 6000,
      });
    });
  }

  private handleBirdsList(): void {
    this.birds$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((birds: IBird[]) => {
      if (birds !== null && birds !== undefined) {
        // clear before calculation
        this.maleBirds = [];
        this.femaleBirds = [];

        const males = birds.filter(b => b.gender === "MALE");
        const females = birds.filter(b => b.gender === "FEMALE");

        males.forEach((bird: IBird) => {
          const existingBird = this.maleBirds.find(b => b.id === bird.id);

          if (existingBird === undefined){
            this.maleBirds.push({ type: bird.ringNumber, value: bird.id });
          }            
        });

        females.forEach((bird: IBird) => {
          const existingBird = this.femaleBirds.find(b => b.id === bird.id);

          if (existingBird === undefined) {
            this.femaleBirds.push({ type: bird.ringNumber, value: bird.id });
          }
        });
      }
    });
  }

  public goBack() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  public ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
