import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProfilPageRoutingModule } from './edit-profil-routing.module';

import { EditProfilPage } from './edit-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProfilPageRoutingModule,
    ɵInternalFormsSharedModule
  ],
  declarations: [EditProfilPage]
})
export class EditProfilPageModule {}
