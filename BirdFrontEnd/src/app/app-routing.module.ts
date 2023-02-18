import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirdCreateComponent } from './bird/bird-create/bird-create.component';
import { BirdDetailComponent } from './bird/bird-detail/bird-detail.component';
import { BirdComponent } from './bird/bird.component';
import { CoupleCreateComponent } from './couple/couple-create/couple-create.component';
import { CoupleDetailComponent } from './couple/couple-detail/couple-detail.component';
import { CoupleComponent } from './couple/couple.component';
import { OwnerCreateComponent } from './owner/owner-create/owner-create.component';
import { OwnerDetailComponent } from './owner/owner-detail/owner-detail.component';
import { OwnerComponent } from './owner/owner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // BIRD
  {
    path: "birds", component: BirdComponent,
    children: [
      { path: "create", component: BirdCreateComponent },
      { path: "detail/:birdId", component: BirdDetailComponent }
    ],
  },

  // OWNER
  {
    path: "owners", component: OwnerComponent,
    children: [
      { path: "create", component: OwnerCreateComponent },
      { path: "detail/:ownerId", component: OwnerDetailComponent },
    ]
  },

  // COUPLE
  {
    path: "couples", component: CoupleComponent,
    children: [
      { path: "create", component: CoupleCreateComponent },
      { path: "detail/:coupleId", component: CoupleDetailComponent },
    ]
  },

  // BREEDER
  {
    path: "breeders", component: OwnerComponent,
    children: [
      { path: "create", component: OwnerCreateComponent },
      { path: "detail/:breederId", component: OwnerDetailComponent },
    ]
  },

  // PAGE NOT FOUND
  { path: "signout", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent },

  // OTHER  
  { path: "", redirectTo: "birds", pathMatch: "full" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
