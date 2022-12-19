import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsdisponibilitePage } from './insdisponibilite.page';

const routes: Routes = [
  {
    path: '',
    component: InsdisponibilitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsdisponibilitePageRoutingModule {}
