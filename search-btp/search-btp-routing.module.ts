import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBtpPage } from './search-btp.page';

const routes: Routes = [
  {
    path: '',
    component: SearchBtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchBtpPageRoutingModule {}
