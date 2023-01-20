import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBtpPageRoutingModule } from './search-btp-routing.module';

import { SearchBtpPage } from './search-btp.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBtpPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchBtpPage]
})
export class SearchBtpPageModule {}
