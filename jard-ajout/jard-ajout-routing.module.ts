import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardAjoutPage } from './jard-ajout.page';

const routes: Routes = [
  {
    path: '',
    component: JardAjoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardAjoutPageRoutingModule {}
