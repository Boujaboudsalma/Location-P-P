import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
})
export class ParametrePage implements OnInit {
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
      }
    });
  }

  ngOnInit() {
  }

  logout(){
   this.afAuth.signOut();
   this.router.navigate(['connexion']);
  }

}
