import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchJardPage } from './search-jard.page';

const routes: Routes = [
  {
    path: '',
    component: SearchJardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchJardPageRoutingModule {}
