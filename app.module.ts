import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { FormsModule } from '@angular/forms';

import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { NgCalendarModule } from 'ionic2-calendar';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase, getDatabase} from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { provideStorage } from '@angular/fire/storage';



@NgModule({

  declarations: [AppComponent],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EmailComposer],
  bootstrap: [AppComponent]
})

export class AppModule {}

