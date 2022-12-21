import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SJardPageRoutingModule } from './s-jard-routing.module';

import { SJardPage } from './s-jard.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SJardPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SJardPage]
})
export class SJardPageModule {}
