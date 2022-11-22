import { Component, OnInit } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth" ;
import { Router  } from '@angular/router' ;
import { AngularFireAuth } from '@angular/fire/compat/auth' ;

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  email: any ;
  router: any;

  constructor(private auth: AngularFireAuth ) { }

  ngOnInit() {
  }

reset () {

  this.email=((document.getElementById("email") as HTMLInputElement).value) ;


  this.auth.
sendPasswordResetEmail( this.email)
  .then(userCredential => {


    window.alert("reset email has benn set this email : " + this.email  )

    



  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage) ;
  });

}


}
