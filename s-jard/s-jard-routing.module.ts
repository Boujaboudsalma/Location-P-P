import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SJardPage } from './s-jard.page';

const routes: Routes = [
  {
    path: '',
    component: SJardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SJardPageRoutingModule {}
