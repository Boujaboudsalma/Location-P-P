/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  dataUser={
    nom:'',
    prenom:'',
    identifiant:'',
    email:'',
    adresse:'',
    ville:'',
    password:''
   };

  constructor(
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    private router: Router
    ) {

     }

  ngOnInit() {
  }

  signUp(){
   this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
   //this.dataUser.id = this.user.uid;
   this.firestore.collection('dataUser').add(this.dataUser);
   this.dataUser = {
    nom:'',
    prenom:'',
    identifiant:'',
    email:'',
    adresse:'',
    ville:'',
    password:''
  };

  this.router.navigate(['categories']);
  }

}
