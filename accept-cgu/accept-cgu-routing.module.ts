import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptCguPage } from './accept-cgu.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptCguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptCguPageRoutingModule {}
