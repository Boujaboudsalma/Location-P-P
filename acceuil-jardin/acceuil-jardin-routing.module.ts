import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilJardinPage } from './acceuil-jardin.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilJardinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilJardinPageRoutingModule {}
