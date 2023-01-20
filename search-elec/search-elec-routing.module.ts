import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchElecPage } from './search-elec.page';

const routes: Routes = [
  {
    path: '',
    component: SearchElecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchElecPageRoutingModule {}
