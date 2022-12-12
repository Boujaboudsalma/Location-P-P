import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptCguPageRoutingModule } from './accept-cgu-routing.module';

import { AcceptCguPage } from './accept-cgu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptCguPageRoutingModule
  ],
  declarations: [AcceptCguPage]
})
export class AcceptCguPageModule {}
