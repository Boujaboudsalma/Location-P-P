import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchJardPageRoutingModule } from './search-jard-routing.module';

import { SearchJardPage } from './search-jard.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchJardPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchJardPage]
})
export class SearchJardPageModule {}
