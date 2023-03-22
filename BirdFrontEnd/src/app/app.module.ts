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

// *** COMPONENTS ***
import { AppComponent } from './app.component';
import { BirdComponent } from './bird/bird.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoupleComponent } from './couple/couple.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';
import { BreederCreateComponent } from './breeder/breeder-create/breeder-create.component';
import { BreederDetailComponent } from './breeder/breeder-detail/breeder-detail.component';
import { BreederComponent } from './breeder/breeder.component';

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
    BreederDetailComponent
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
    CalendarModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
