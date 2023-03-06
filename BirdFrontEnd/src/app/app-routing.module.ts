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

const routes: Routes = [
  // BIRD
  { path: 'birds', component: BirdComponent },
  { path: 'birds/create', component: BirdCreateComponent },
  { path: 'birds/detail/:id', component: BirdDetailComponent },

  // OWNER
  { path: 'owners', component: OwnerComponent },
  { path: 'owners/create', component: OwnerCreateComponent },
  { path: 'owners/detail/:id', component: OwnerDetailComponent },


  // COUPLE
  { path: 'couples', component: CoupleComponent },
  { path: 'couples/create', component: CoupleCreateComponent },
  { path: 'couples/detail/:id', component: CoupleDetailComponent },

  // BREEDER
  { path: 'breeders', component: BreederComponent },
  { path: 'breeders/create', component: BreederCreateComponent },
  { path: 'breeders/detail/:id', component: BreederDetailComponent },


  // PAGE NOT FOUND
  { path: 'signout', component: PageNotFoundComponent },
  
  // OTHER  
  { path: '', redirectTo: 'birds', pathMatch: 'full' },
  { path: '**', redirectTo: 'birds', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
