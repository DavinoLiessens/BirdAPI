import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdComponent } from './bird/bird.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';
import { CoupleComponent } from './couple/couple.component';
import { ContactCreateComponent } from './contact/contact-create/contact-create.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Auth components and guard
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  // AUTH ROUTES (public)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  // BIRD (protected)
  { path: 'birds', component: BirdComponent, canActivate: [AuthGuard] },
  { path: 'birds/create', component: BirdCreateComponent, canActivate: [AuthGuard] },
  { path: 'birds/detail/:id', component: BirdDetailComponent, canActivate: [AuthGuard] },

  // CONTACTS (protected): one contact list per kwekerij, used as breeder and owner
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'contacts/create', component: ContactCreateComponent, canActivate: [AuthGuard] },
  { path: 'contacts/detail/:id', component: ContactDetailComponent, canActivate: [AuthGuard] },
  // Old links to the former owner/breeder pages
  { path: 'owners', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'breeders', redirectTo: 'contacts', pathMatch: 'full' },

  // COUPLE (protected)
  { path: 'couples', component: CoupleComponent, canActivate: [AuthGuard] },
  { path: 'couples/create', component: CoupleCreateComponent, canActivate: [AuthGuard] },
  { path: 'couples/detail/:id', component: CoupleDetailComponent, canActivate: [AuthGuard] },


  // OTHER  
  { path: '', redirectTo: 'birds', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
