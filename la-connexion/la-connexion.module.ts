import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaConnexionPageRoutingModule } from './la-connexion-routing.module';

import { LaConnexionPage } from './la-connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaConnexionPageRoutingModule
  ],
  declarations: [LaConnexionPage]
})
export class LaConnexionPageModule {}
