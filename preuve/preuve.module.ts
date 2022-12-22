import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreuvePageRoutingModule } from './preuve-routing.module';

import { PreuvePage } from './preuve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreuvePageRoutingModule
  ],
  declarations: [PreuvePage]
})
export class PreuvePageModule {}
