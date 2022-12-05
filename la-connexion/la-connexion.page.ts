import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-la-connexion',
  templateUrl: './la-connexion.page.html',
  styleUrls: ['./la-connexion.page.scss'],
})
export class LaConnexionPage implements OnInit {
  dataUser={
    email:'',
    password:''
   };
   connected: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth){
        console.log('non connecté');
        this.connected = false;
      }else{
        console.log('connecté');
        this.connected = true;

        this.router.navigate(['categories']);
      }
    });
   }

  ngOnInit() {
  }

  login(){
    localStorage.setItem('id',this.dataUser.email);
    this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email:'',
      password:''
    };
  }

}
