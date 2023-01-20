import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilAudiovisuelPage } from './acceuil-audiovisuel.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilAudiovisuelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilAudiovisuelPageRoutingModule {}
