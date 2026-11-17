import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdComponent } from './bird/bird.component';
import { BreederCreateComponent } from './breeder/breeder-create/breeder-create.component';
import { BreederDetailComponent } from './breeder/breeder-detail/breeder-detail.component';
import { BreederComponent } from './breeder/breeder.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';
import { CoupleComponent } from './couple/couple.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerComponent } from './owner/owner.component';
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

  // OWNER (protected)
  { path: 'owners', component: OwnerComponent, canActivate: [AuthGuard] },
  { path: 'owners/create', component: OwnerCreateComponent, canActivate: [AuthGuard] },
  { path: 'owners/detail/:id', component: OwnerDetailComponent, canActivate: [AuthGuard] },

  // COUPLE (protected)
  { path: 'couples', component: CoupleComponent, canActivate: [AuthGuard] },
  { path: 'couples/create', component: CoupleCreateComponent, canActivate: [AuthGuard] },
  { path: 'couples/detail/:id', component: CoupleDetailComponent, canActivate: [AuthGuard] },

  // BREEDER (protected)
  { path: 'breeders', component: BreederComponent, canActivate: [AuthGuard] },
  { path: 'breeders/create', component: BreederCreateComponent, canActivate: [AuthGuard] },
  { path: 'breeders/detail/:id', component: BreederDetailComponent, canActivate: [AuthGuard] },

  // OTHER  
  { path: '', redirectTo: 'birds', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
