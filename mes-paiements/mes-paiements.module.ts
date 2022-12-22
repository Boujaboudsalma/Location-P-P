import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesPaiementsPageRoutingModule } from './mes-paiements-routing.module';

import { MesPaiementsPage } from './mes-paiements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesPaiementsPageRoutingModule
  ],
  declarations: [MesPaiementsPage]
})
export class MesPaiementsPageModule {}
