import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContactFacade } from 'src/app/store/entities/contact/contact.facade';
import { IGetContactsRequest, IContact, IUpdateContactRequest } from 'src/app/types/contact.types';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactDetailComponent implements OnInit, OnDestroy {

  // Observables
  public contact$: Observable<IContact> = this.contactFacade.getContact();
  private destroyed$: Subject<boolean> = new Subject<boolean>();
  public loading$: Observable<boolean> = this.contactFacade.getLoadingDetail();

  // local variables
  public contactId: string;
  public contactForm: UntypedFormGroup;

  constructor(
    private fb: UntypedFormBuilder,
    private contactFacade: ContactFacade,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.contactId = this.route.snapshot.params?.id;
    this.contactFacade.getContactRequest(parseInt(this.contactId));

    this.contact$.pipe(
      takeUntil(this.destroyed$),
    ).subscribe((contact: IContact) => {
      if (contact !== null && contact !== undefined) {
        // fill in the form
        this.contactForm = this.fb.group({
          firstName: [contact.firstName, Validators.required],
          lastName: [contact.lastName, Validators.required],
          phoneNumber: [contact.phoneNumber],
          email: [contact.email, Validators.email],
        });
      }
    });
    // handle success and errors
    this.handleSuccesses();
    this.handleErrors();

  }

  public onSubmit() {
    const request: IUpdateContactRequest = {
      id: parseInt(this.contactId),
      firstName: this.contactForm.get('firstName').value,
      lastName: this.contactForm.get('lastName').value,
      phoneNumber: this.contactForm.get('phoneNumber').value,
      email: this.contactForm.get('email').value,
    };

    this.contactFacade.updateContactRequest(request);
  }

  public goBack() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private handleSuccesses(): void {
    this.contactFacade.onUpdateContactSuccess().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.success('Contact gegevens aangepast!', 'Gelukt', {
        timeOut: 6000,
      });

      const request: IGetContactsRequest = {
        page: 1,
        pageSize: 10,
      }
      this.contactFacade.getAllContactsRequest(request);

      this.contactFacade.clearDetail();
      this.goBack();
    });
  }

  private handleErrors(): void {
    this.contactFacade.onUpdateContactError().pipe(
      takeUntil(this.destroyed$),
    ).subscribe(() => {
      this.toastrService.error('Oeps, er liep iets mis tijdens het aanpassen van deze contact!', 'Error', {
        timeOut: 6000,
      });
    });
  }

  public ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
