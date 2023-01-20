import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccceuilBtpPageRoutingModule } from './accceuil-btp-routing.module';

import { AccceuilBtpPage } from './accceuil-btp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccceuilBtpPageRoutingModule
  ],
  declarations: [AccceuilBtpPage]
})
export class AccceuilBtpPageModule {}
