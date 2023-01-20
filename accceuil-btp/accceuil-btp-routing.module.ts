import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccceuilBtpPage } from './accceuil-btp.page';

const routes: Routes = [
  {
    path: '',
    component: AccceuilBtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccceuilBtpPageRoutingModule {}
