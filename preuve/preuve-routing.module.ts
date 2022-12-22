import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreuvePage } from './preuve.page';

const routes: Routes = [
  {
    path: '',
    component: PreuvePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreuvePageRoutingModule {}
