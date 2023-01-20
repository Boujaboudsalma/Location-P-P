import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilAudiovisuelPageRoutingModule } from './acceuil-audiovisuel-routing.module';

import { AcceuilAudiovisuelPage } from './acceuil-audiovisuel.page';
import { PaiementComponent } from './paiement/paiement.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilAudiovisuelPageRoutingModule
  ],
  declarations: [AcceuilAudiovisuelPage, PaiementComponent],
  entryComponents: [PaiementComponent]
})
export class AcceuilAudiovisuelPageModule {}
