// *** MODULES ***
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogService } from 'primeng/dynamicdialog';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { PanelModule } from 'primeng/panel';
import { TextareaModule } from 'primeng/textarea';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastrModule } from 'ngx-toastr';
import { DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PaginatorModule } from 'primeng/paginator';

// *** COMPONENTS ***
import { AppComponent } from './app.component';
import { BirdComponent, BirdDetailComponent, BirdCreateComponent, BirdShowCreateModal, BirdShowUpdateModal } from './bird/index';
import { OwnerComponent, OwnerDetailComponent, OwnerCreateComponent } from './owner/index';
import { BreederComponent, BreederDetailComponent, BreederCreateComponent} from './breeder/index';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderComponent } from './ui/components/index';

// TODO replace with index file
import { CoupleComponent } from './couple/couple.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';

// *** MODALS ***
import { BirdEggCreateModal } from './couple/birdegg-create-modal/birdegg-create-modal';
import { BirdEggUpdateModal } from './couple/birdegg-update-modal/birdegg-update-modal';

// *** STORE CONFIG ***
import { AppStoreModule } from './store/store.module';
import { CoreStoreModule } from './store/entities/store.module';

// *** AUTH MODULE ***
import { AuthModule } from './auth/auth.module';

// Lara with a blue primary color, matching the former saga-blue theme
const BirdPreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{blue.50}', 100: '{blue.100}', 200: '{blue.200}', 300: '{blue.300}', 400: '{blue.400}',
            500: '{blue.500}', 600: '{blue.600}', 700: '{blue.700}', 800: '{blue.800}', 900: '{blue.900}', 950: '{blue.950}',
        },
    },
});

@NgModule({ declarations: [
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
        BirdEggCreateModal,
        BirdEggUpdateModal,
        LoaderComponent,
        BirdShowCreateModal,
        BirdShowUpdateModal,
    ],
    bootstrap: [AppComponent], imports: [AppStoreModule,
        CoreStoreModule,
        ToastrModule.forRoot({
            maxOpened: 4,
            preventDuplicates: true,
            positionClass: 'toast-top-right'
        }),
        BrowserModule,
        BrowserAnimationsModule,
        AuthModule,
        AppRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TableModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
        InputNumberModule,
        SelectModule,
        PanelModule,
        TextareaModule,
        OrganizationChartModule,
        CheckboxModule,
        DatePickerModule,
        InputMaskModule,
        ProgressSpinnerModule,
        PaginatorModule], providers: [
        DialogService,
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimationsAsync(),
        // PrimeNG 18+ themes are presets instead of CSS files. Lara (blue) is the closest
        // to the former saga-blue theme. Dark mode only via an explicit class, so the
        // app does not switch to dark on systems that prefer dark mode.
        providePrimeNG({ theme: { preset: BirdPreset, options: { darkModeSelector: '.app-dark' } } }),
    ] })
export class AppModule { }
