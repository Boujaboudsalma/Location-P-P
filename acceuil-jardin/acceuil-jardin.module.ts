import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilJardinPageRoutingModule } from './acceuil-jardin-routing.module';

import { AcceuilJardinPage } from './acceuil-jardin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilJardinPageRoutingModule
  ],
  declarations: [AcceuilJardinPage]
})
export class AcceuilJardinPageModule {}
