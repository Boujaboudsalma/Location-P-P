import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { UserService} from '../user.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirebaseService } from '../firebase.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  dataUser: Observable<any[]>;
  id = localStorage.getItem('id');


  constructor(
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth,
    public firebaseService: FirebaseService
  ) {
     this.dataUser = this.firestore.collection('dataUser', (ref) => ref.where('email', '==', this.id) ).valueChanges();


    console.log(this.dataUser);
  }



  ngOnInit() {
  }


}
