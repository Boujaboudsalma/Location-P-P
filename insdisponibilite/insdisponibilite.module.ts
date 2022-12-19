import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsdisponibilitePageRoutingModule } from './insdisponibilite-routing.module';

import { InsdisponibilitePage } from './insdisponibilite.page';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgCalendarModule } from 'ionic2-calendar';


registerLocaleData(localeFr, 'fr');

@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    InsdisponibilitePageRoutingModule
  ],
  declarations: [InsdisponibilitePage]
})
export class InsdisponibilitePageModule {}
