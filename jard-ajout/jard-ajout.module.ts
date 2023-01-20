import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JardAjoutPageRoutingModule } from './jard-ajout-routing.module';

import { JardAjoutPage } from './jard-ajout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JardAjoutPageRoutingModule
  ],
  declarations: [JardAjoutPage]
})
export class JardAjoutPageModule {}
