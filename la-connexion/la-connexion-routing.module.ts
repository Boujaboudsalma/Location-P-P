import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaConnexionPage } from './la-connexion.page';

const routes: Routes = [
  {
    path: '',
    component: LaConnexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaConnexionPageRoutingModule {}
