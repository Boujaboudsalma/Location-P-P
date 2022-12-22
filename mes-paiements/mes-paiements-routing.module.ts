import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesPaiementsPage } from './mes-paiements.page';

const routes: Routes = [
  {
    path: '',
    component: MesPaiementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesPaiementsPageRoutingModule {}
