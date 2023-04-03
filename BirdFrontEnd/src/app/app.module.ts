// *** MODULES ***
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastrModule } from 'ngx-toastr';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// *** COMPONENTS ***
import { AppComponent } from './app.component';
import { BirdComponent, BirdDetailComponent, BirdCreateComponent } from './bird/index';
import { OwnerComponent, OwnerDetailComponent, OwnerCreateComponent } from './owner/index';
import { BreederComponent, BreederDetailComponent, BreederCreateComponent} from './breeder/index';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './ui/components/index';

// TODO replace with index file
import { CoupleComponent } from './couple/couple.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';

// *** STORE CONFIG ***
import { AppStoreModule } from './store/store.module';
import { CoreStoreModule } from './store/entities/store.module';
import { BaseService } from './Services/base.service';

@NgModule({
  declarations: [
    AppComponent,
    BirdComponent,
    BirdDetailComponent,
    BirdCreateComponent,
    OwnerComponent,
    OwnerDetailComponent,
    OwnerCreateComponent,
    PageNotFoundComponent,
    CoupleComponent,
    CoupleCreateComponent,
    CoupleDetailComponent,
    BreederComponent,
    BreederCreateComponent,
    BreederDetailComponent,
    LoaderComponent
  ],
  imports: [
    AppStoreModule,
    CoreStoreModule,
    ToastrModule.forRoot({
      maxOpened: 4,
      preventDuplicates: true,
      positionClass: 'toast-top-right'
    }),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    VirtualScrollerModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule, 
    PanelModule,
    InputTextareaModule,
    OrganizationChartModule,
    CheckboxModule,
    CalendarModule,
    InputMaskModule,
    ProgressSpinnerModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
