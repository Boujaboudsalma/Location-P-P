import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contact= {
    nom:'',
    prenom:'',
    email:'',
    sujet:'',
    message:''

  };

  constructor(
    private emailComposer: EmailComposer,
    public firestore: AngularFirestore,
  ) { }

  ngOnInit() {
  }
  envoyer(){
    this.firestore.collection('contact').add(this.contact);
    this.contact= {
      nom:'',
      prenom:'',
      email:'',
      sujet:'',
      message:''
    };
  }

}
